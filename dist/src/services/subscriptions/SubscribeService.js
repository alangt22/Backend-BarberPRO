"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeService = void 0;
const stripe_1 = __importDefault(require("stripe"));
const prisma_1 = __importDefault(require("../../prisma"));
class SubscribeService {
    async execute({ user_id }) {
        const stripe = new stripe_1.default(process.env.STRIPE_API_KEY, {
            apiVersion: "2026-01-28.clover",
            appInfo: {
                name: "barberpro",
                version: "1",
            },
        });
        const user = await prisma_1.default.user.findFirst({
            where: {
                id: user_id,
            },
        });
        let customerId = user.stripe_customer_id;
        if (!customerId) {
            const stripeCustomer = await stripe.customers.create({
                email: user.email,
            });
            await prisma_1.default.user.update({
                where: {
                    id: user_id,
                },
                data: {
                    stripe_customer_id: stripeCustomer.id,
                },
            });
            customerId = stripeCustomer.id;
        }
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: customerId,
            payment_method_types: ["card"],
            billing_address_collection: "required",
            line_items: [{ price: process.env.STRIPE_PRICE, quantity: 1 }],
            mode: "subscription",
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        });
        return { sessionId: stripeCheckoutSession.id };
    }
}
exports.SubscribeService = SubscribeService;
