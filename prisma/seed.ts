
import { type User, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function createUsers(){
    const data: User[] = [
        {id:'1', name: 'John', email: 'test1@mail.ru',emailVerified:new Date,  image: null,createdAt: new Date, updatedAt: new Date},
        {id:'2', name: 'Mary', email: 'test2a@mail.ru',emailVerified:new Date,  image: null,createdAt: new Date, updatedAt: new Date },
         
    ]
    return await prisma.user.createMany({
        data
    });
  
}


async function main() {
    try {
        const 
            users = await createUsers();
        console.log({ users});
        
    } catch (error) {
      console.log('Error', error);
    } finally {
        prisma.$disconnect();
    }
    
}