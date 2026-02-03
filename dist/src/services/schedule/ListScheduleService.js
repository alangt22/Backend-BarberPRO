"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListScheduleService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListScheduleService {
    async execute({ user_id }) {
        const schedules = await prisma_1.default.service.findMany({
            where: {
                user_id: user_id,
            },
            select: {
                id: true,
                customer: true,
                haircut: true,
            },
        });
        return schedules;
    }
}
exports.ListScheduleService = ListScheduleService;
