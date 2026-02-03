"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeController = void 0;
const SubscribeService_1 = require("../../services/subscriptions/SubscribeService");
class SubscribeController {
    async handle(req, res) {
        const user_id = req.user_id;
        const subscribeService = new SubscribeService_1.SubscribeService();
        const subscribe = await subscribeService.execute({ user_id });
        return res.json(subscribe);
    }
}
exports.SubscribeController = SubscribeController;
