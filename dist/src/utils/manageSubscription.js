"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSubscription = saveSubscription;
const stripe_1 = require("./stripe");
const prisma_1 = __importDefault(require("../prisma"));
async function saveSubscription(subscriptionId, customerId, createAction = false, deletAction = false) {
    const findUser = await prisma_1.default.user.findFirst({
        where: {
            stripe_customer_id: customerId,
        },
        include: {
            subscriptions: true,
        },
    });
    const subscription = await stripe_1.stripe.subscriptions.retrieve(subscriptionId);
    const subscriptionData = {
        id: subscription.id,
        userId: findUser.id,
        status: subscription.status,
        priceId: subscription.items.data[0].price.id,
    };
    if (createAction) {
        console.log(subscriptionData);
        try {
            await prisma_1.default.subscription.create({
                data: subscriptionData,
            });
        }
        catch (error) {
            console.log("error create subscription");
            console.log(error);
        }
    }
    else {
        if (deletAction) {
            await prisma_1.default.subscription.delete({
                where: {
                    id: subscriptionId,
                },
            });
            return;
        }
        try {
            await prisma_1.default.subscription.update({
                where: {
                    id: subscriptionId,
                },
                data: {
                    status: subscription.status,
                    priceId: subscription.items.data[0].price.id,
                },
            });
        }
        catch (error) {
            console.log("error update subscription");
            console.log(error);
        }
    }
}
