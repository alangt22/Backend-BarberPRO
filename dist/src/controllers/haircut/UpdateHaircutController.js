"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHaircutController = void 0;
const UpdateHaircutService_1 = require("../../services/haircut/UpdateHaircutService");
class UpdateHaircutController {
    async handle(req, res) {
        const { haircut_id, name, price, status } = req.body;
        const user_id = req.user_id;
        const updateHaircutService = new UpdateHaircutService_1.UpdateHaircutService();
        const haircut = await updateHaircutService.execute({
            user_id,
            haircut_id,
            name,
            price,
            status
        });
        return res.json(haircut);
    }
}
exports.UpdateHaircutController = UpdateHaircutController;
