import prismaClient from "../../prisma";

interface CountHaircutsRequest {
    user_id: string;
}

class CountHaircutsService {
    async execute({user_id}: CountHaircutsRequest) {
        const count = await prismaClient.haircut.count({
            where: {
                user_id: user_id
            }
        });

        return count;
    }
}

export { CountHaircutsService };