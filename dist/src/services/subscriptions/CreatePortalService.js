"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePortalService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const stripe_1 = __importDefault(require("stripe"));
class CreatePortalService {
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
        let sessionId = user.stripe_customer_id;
        if (!sessionId) {
            console.log("Não tem customer id");
            return { message: "Não tem customer id" };
        }
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: sessionId,
            return_url: process.env.STRIPE_SUCCESS_URL,
        });
        return { sessionId: portalSession.url };
    }
}
exports.CreatePortalService = CreatePortalService;
