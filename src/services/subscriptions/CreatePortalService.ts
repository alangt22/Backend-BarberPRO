import prismaClient from "../../prisma";
import Stripe from "stripe";

interface CreatePortalRequest {
  user_id: string;
}

class CreatePortalService {
  async execute({ user_id }: CreatePortalRequest) {
    const stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: "2026-01-28.clover",
      appInfo: {
        name: "barberpro",
        version: "1",
      },
    });

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    let sessionId = user.stripe_customer_id;

    if (!sessionId) {
      console.log("Não tem customer id");
      return {message: "Não tem customer id"}
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: sessionId,
      return_url: process.env.STRIPE_SUCCESS_URL,
    });

    return { sessionId: portalSession.url };
  }
}

export { CreatePortalService };