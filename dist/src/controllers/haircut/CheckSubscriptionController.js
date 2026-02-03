"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckSubscriptionController = void 0;
const CheckSubscriptionService_1 = require("../../services/haircut/CheckSubscriptionService");
class CheckSubscriptionController {
    async handle(req, res) {
        const user_id = req.user_id;
        const checkSubscriptionService = new CheckSubscriptionService_1.CheckSubscriptionService();
        const status = await checkSubscriptionService.execute({ user_id });
        return res.json(status);
    }
}
exports.CheckSubscriptionController = CheckSubscriptionController;
