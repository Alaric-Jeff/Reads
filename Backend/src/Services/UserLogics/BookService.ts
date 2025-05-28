import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BookService = {
    async CreateBook(title: string, author: string, description: string, image: string, userId: string){
        await prisma.Book.create({
            data: {
                title,
                author,
                description,
                
            }
        })
    }
};

export default BookService;
