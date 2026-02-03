"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailHaircutService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DetailHaircutService {
    async execute({ haircut_id }) {
        const haircut = await prisma_1.default.haircut.findFirst({
            where: {
                id: haircut_id
            }
        });
        return haircut;
    }
}
exports.DetailHaircutService = DetailHaircutService;
