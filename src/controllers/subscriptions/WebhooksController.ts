import { Request, Response } from "express";
import Stripe from "stripe";
import { stripe } from "../../utils/stripe";
import { saveSubscription } from "../../utils/manageSubscription";

class WebhooksController {
  async handle(req: Request, res: Response) {
    let event: Stripe.Event = req.body;

    const signature = req.headers["stripe-signature"];
    let endPointSecret =
      "whsec_dd1f8ad12433bbe23348eebd5782267975e291bd78d824fc8931597db8b43045";

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature as string,
        endPointSecret,
      );
    } catch (error) {
      console.log("Webhook signature failed", error.message);
      return res.sendStatus(400);
    }

    switch (event.type) {
      case "customer.subscription.deleted":
        // deletar assinatura
        const payment = event.data.object as Stripe.Subscription;

        await saveSubscription(
          payment.id,
          payment.customer.toString(),
          false,
          true,
        );

        break;
      case "customer.subscription.updated":
        // atualizar assinatura
        const paymentIntent = event.data.object as Stripe.Subscription;

        await saveSubscription(
          paymentIntent.id,
          paymentIntent.customer.toString(),
          false,
        );

        break;
      case "checkout.session.completed":
        // criar assinatura
        const checkoutSession = event.data.object as Stripe.Checkout.Session;

        await saveSubscription(
          checkoutSession.subscription.toString(),
          checkoutSession.customer.toString(),
          true,
        );

        break;
      default:
        console.log(`Evento desconhecido: ${event.type}`);
    }

    res.send();
  }
}

export { WebhooksController };
