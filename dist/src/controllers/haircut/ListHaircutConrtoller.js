"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListHaircutController = void 0;
const ListHaircutService_1 = require("../../services/haircut/ListHaircutService");
class ListHaircutController {
    async handle(req, res) {
        const user_id = req.user_id;
        const status = req.query.status;
        const listHaircutService = new ListHaircutService_1.ListHaircutService();
        const haircuts = await listHaircutService.execute({
            user_id,
            status
        });
        return res.json(haircuts);
    }
}
exports.ListHaircutController = ListHaircutController;
