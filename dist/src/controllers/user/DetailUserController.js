"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailUserController = void 0;
const DetailUserService_1 = require("../../services/user/DetailUserService");
class DetailUserController {
    async handle(req, res) {
        const user_id = req.user_id;
        const userDetailService = new DetailUserService_1.UserDetailService();
        const detailUser = await userDetailService.execute(user_id);
        return res.json(detailUser);
    }
}
exports.DetailUserController = DetailUserController;
