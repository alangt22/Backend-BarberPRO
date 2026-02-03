"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountHaircutsController = void 0;
const CountHaircutsService_1 = require("../../services/haircut/CountHaircutsService");
class CountHaircutsController {
    async handle(req, res) {
        const user_id = req.user_id;
        const countHaircts = new CountHaircutsService_1.CountHaircutsService();
        const count = await countHaircts.execute({ user_id });
        return res.json(count);
    }
}
exports.CountHaircutsController = CountHaircutsController;
