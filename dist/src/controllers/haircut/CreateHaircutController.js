"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHaircutController = void 0;
const CreateHaircutService_1 = require("../../services/haircut/CreateHaircutService");
class CreateHaircutController {
    async handle(req, res) {
        const { name, price } = req.body;
        const user_id = req.user_id;
        const createHaircutService = new CreateHaircutService_1.CreateHaircutService();
        const haircut = await createHaircutService.execute({
            user_id,
            name,
            price
        });
        return res.json(haircut);
    }
}
exports.CreateHaircutController = CreateHaircutController;
