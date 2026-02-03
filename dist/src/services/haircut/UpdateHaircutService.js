"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHaircutService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateHaircutService {
    async execute({ user_id, haircut_id, name, price, status = true }) {
        const user = await prisma_1.default.user.findFirst({
            where: {
                id: user_id
            },
            include: {
                subscriptions: true
            }
        });
        if (user?.subscriptions?.status !== "active") {
            throw new Error("Not authorized");
        }
        const haircut = await prisma_1.default.haircut.update({
            where: {
                id: haircut_id,
            },
            data: {
                name: name,
                price: price,
                status: status === "true" || status === true ? true : false
            }
        });
        return haircut;
    }
}
exports.UpdateHaircutService = UpdateHaircutService;
