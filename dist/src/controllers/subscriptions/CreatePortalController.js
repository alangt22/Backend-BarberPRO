"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePortalController = void 0;
const CreatePortalService_1 = require("../../services/subscriptions/CreatePortalService");
class CreatePortalController {
    async handle(req, res) {
        const user_id = req.user_id;
        const createPortalService = new CreatePortalService_1.CreatePortalService();
        const portal = await createPortalService.execute({ user_id });
        return res.json(portal);
    }
}
exports.CreatePortalController = CreatePortalController;
