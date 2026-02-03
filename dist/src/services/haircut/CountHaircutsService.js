"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountHaircutsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CountHaircutsService {
    async execute({ user_id }) {
        const count = await prisma_1.default.haircut.count({
            where: {
                user_id: user_id
            }
        });
        return count;
    }
}
exports.CountHaircutsService = CountHaircutsService;
