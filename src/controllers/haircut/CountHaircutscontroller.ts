import { Request, Response } from 'express';
import { CountHaircutsService } from '../../services/haircut/CountHaircutsService';

class CountHaircutsController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const countHaircts = new CountHaircutsService();
        const count = await countHaircts.execute({ user_id });

        return res.json(count); 
    }
}

export { CountHaircutsController };