"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserController = void 0;
const AuthUserService_1 = require("../../services/user/AuthUserService");
class AuthUserController {
    async handle(req, res) {
        const { email, password } = req.body;
        const authUserService = new AuthUserService_1.AuthUserService();
        try {
            const session = await authUserService.execute({ email, password });
            return res.json(session);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
exports.AuthUserController = AuthUserController;
