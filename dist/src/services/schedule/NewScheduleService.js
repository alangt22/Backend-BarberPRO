"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewScheduleService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class NewScheduleService {
    async execute({ user_id, haircut_id, customer }) {
        if (customer === '' || customer === '') {
            throw new Error("Error schedule new service.");
        }
        const schedule = await prisma_1.default.service.create({
            data: {
                customer,
                user_id,
                haircut_id
            }
        });
        return schedule;
    }
}
exports.NewScheduleService = NewScheduleService;
