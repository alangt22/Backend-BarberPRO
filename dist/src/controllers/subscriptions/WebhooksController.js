"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksController = void 0;
const stripe_1 = require("../../utils/stripe");
const manageSubscription_1 = require("../../utils/manageSubscription");
class WebhooksController {
    async handle(req, res) {
        let event = req.body;
        const signature = req.headers["stripe-signature"];
        let endPointSecret = "whsec_dd1f8ad12433bbe23348eebd5782267975e291bd78d824fc8931597db8b43045";
        try {
            event = stripe_1.stripe.webhooks.constructEvent(req.body, signature, endPointSecret);
        }
        catch (error) {
            console.log("Webhook signature failed", error.message);
            return res.sendStatus(400);
        }
        switch (event.type) {
            case "customer.subscription.deleted":
                // deletar assinatura
                const payment = event.data.object;
                await (0, manageSubscription_1.saveSubscription)(payment.id, payment.customer.toString(), false, true);
                break;
            case "customer.subscription.updated":
                // atualizar assinatura
                const paymentIntent = event.data.object;
                await (0, manageSubscription_1.saveSubscription)(paymentIntent.id, paymentIntent.customer.toString(), false);
                break;
            case "checkout.session.completed":
                // criar assinatura
                const checkoutSession = event.data.object;
                await (0, manageSubscription_1.saveSubscription)(checkoutSession.subscription.toString(), checkoutSession.customer.toString(), true);
                break;
            default:
                console.log(`Evento desconhecido: ${event.type}`);
        }
        res.send();
    }
}
exports.WebhooksController = WebhooksController;
