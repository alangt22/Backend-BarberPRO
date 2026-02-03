"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListScheduleController = void 0;
const ListScheduleService_1 = require("../../services/schedule/ListScheduleService");
class ListScheduleController {
    async handle(req, res) {
        const user_id = req.user_id;
        const listScheduleService = new ListScheduleService_1.ListScheduleService();
        const schedules = await listScheduleService.execute({ user_id });
        return res.json(schedules);
    }
}
exports.ListScheduleController = ListScheduleController;
