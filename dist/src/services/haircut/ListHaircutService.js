"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListHaircutService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListHaircutService {
    async execute({ user_id, status }) {
        const haircuts = await prisma_1.default.haircut.findMany({
            where: {
                user_id: user_id,
                status: status === 'true' ? true : false
            }
        });
        return haircuts;
    }
}
exports.ListHaircutService = ListHaircutService;
