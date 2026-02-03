"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailHaircutController = void 0;
const DetailHaircutService_1 = require("../../services/haircut/DetailHaircutService");
class DetailHaircutController {
    async handle(req, res) {
        const haircut_id = req.query.haircut_id;
        const detailHaircut = new DetailHaircutService_1.DetailHaircutService();
        const haircut = await detailHaircut.execute({
            haircut_id,
        });
        return res.json(haircut);
    }
}
exports.DetailHaircutController = DetailHaircutController;
