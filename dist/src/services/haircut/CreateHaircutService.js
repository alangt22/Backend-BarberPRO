"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHaircutService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateHaircutService {
    async execute({ user_id, name, price }) {
        if (!name || !price) {
            throw new Error("Error");
        }
        // verificar quantos modelos esse usuário já criou
        const myHaircuts = await prisma_1.default.haircut.count({
            where: {
                user_id: user_id
            }
        });
        // verificar o plano do usuário se e premium ou não e a quantidade de modelos permitidos
        const user = await prisma_1.default.user.findFirst({
            where: {
                id: user_id
            },
            include: {
                subscriptions: true
            }
        });
        if (myHaircuts >= 3 && user?.subscriptions?.status !== "active") {
            throw new Error("Not authorized");
        }
        const haircut = await prisma_1.default.haircut.create({
            data: {
                name: name,
                price: price,
                user_id: user_id
            },
        });
        return haircut;
    }
}
exports.CreateHaircutService = CreateHaircutService;
