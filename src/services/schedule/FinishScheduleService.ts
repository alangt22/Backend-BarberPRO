import prismaClient from "../../prisma";

interface FinishRequest {
    schedule_id: string;
    user_id: string;
}

class FinishScheduleService {
    async execute({ schedule_id, user_id }: FinishRequest) {
        
        if(schedule_id === "" || user_id === "") {
            throw new Error("Error");
        }

        try {
            
            const belongToUser = await prismaClient.service.findFirst({
                where: {
                    id: schedule_id,
                    user_id: user_id
                }
            });
            if(!belongToUser) {
                throw new Error("Not authorized");
            }

            await prismaClient.service.delete({
                where: {
                    id: schedule_id
                }
            });

            return { message: "Finalizado com sucesso" };

        } catch (error) {
            console.log(error);
            throw new Error("Error");
        }

    }
}

export { FinishScheduleService };