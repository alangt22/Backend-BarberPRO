"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishScheduleController = void 0;
const FinishScheduleService_1 = require("../../services/schedule/FinishScheduleService");
class FinishScheduleController {
    async handle(req, res) {
        const schedule_id = req.query.schedule_id;
        const user_id = req.user_id;
        const finishScheduleService = new FinishScheduleService_1.FinishScheduleService();
        const schedule = await finishScheduleService.execute({
            schedule_id,
            user_id
        });
        return res.json(schedule);
    }
}
exports.FinishScheduleController = FinishScheduleController;
