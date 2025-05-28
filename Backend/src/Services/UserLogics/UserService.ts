import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import logger from "../../Utils/logger";

const prisma = new PrismaClient();

 const UserService = {
    async CreateUser(email: string, password: string, username: string){
        try{
            const user = await prisma.User.create({
                data: {
                    email,
                    password: await bcryptjs.hash(password, 10),
                    username
                }
            });
            await prisma.Library.create({
                data: {
                    id: user.id
                }
            })
            logger.info(`User ${username} created successfully`);
        }catch(err){
            logger.error(err);
            throw new Error("Failed to create user");
        }
    },

    async Login(email: string, password: string){
        try{
            const user = await prisma.User.findUnique({
                where: {
                    email
                }
            });

            if(!user) return false;

            const result = await bcryptjs.compare(password, user.password);
            if(!result) {
                logger.debug(`User ${user.username} failed to login, wrong password`);
            }
            logger.info(`User ${user.username} logged in successfully`);
            return true;
            
        }catch(err){
            logger.error(err);
            throw new Error("Failed to login");
        }
    }
}

export default UserService;



