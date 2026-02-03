import { Request, Response} from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpdatedUserController {
    async handle(req: Request, res: Response) {

        const { name, endereco } = req.body;
        const user_id = req.user_id;

        const updatedUser = new UpdateUserService();
        
        const user = await updatedUser.execute({
            user_id,
            name,
            endereco,
        });

        return res.json(user);
    }
}

export { UpdatedUserController };