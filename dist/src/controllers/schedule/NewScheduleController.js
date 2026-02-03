"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewScheduleController = void 0;
const NewScheduleService_1 = require("../../services/schedule/NewScheduleService");
class NewScheduleController {
    async handle(req, res) {
        const { haircut_id, customer } = req.body;
        const user_id = req.user_id;
        const newScheduleService = new NewScheduleService_1.NewScheduleService();
        const schedule = await newScheduleService.execute({
            user_id,
            haircut_id,
            customer
        });
        return res.json(schedule);
    }
}
exports.NewScheduleController = NewScheduleController;
