"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedUserController = void 0;
const UpdateUserService_1 = require("../../services/user/UpdateUserService");
class UpdatedUserController {
    async handle(req, res) {
        const { name, endereco } = req.body;
        const user_id = req.user_id;
        const updatedUser = new UpdateUserService_1.UpdateUserService();
        const user = await updatedUser.execute({
            user_id,
            name,
            endereco,
        });
        return res.json(user);
    }
}
exports.UpdatedUserController = UpdatedUserController;
