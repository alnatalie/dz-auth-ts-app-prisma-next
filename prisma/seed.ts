
import { type User, Busket, Buyers, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



async function createBusket(){
    const data:Busket[] = [
        {id: 1, byerId: 1, open: false },
        {id: 2, byerId: 2, open: false} 
    ]
    return await prisma.busket.createMany({
        data
    });
   
   
}

async function createByuers(){
    const data: Buyers[] = [
        {id:1, name: 'Анастасия', email: 'nastya111@mail.ru', phone:89135473219,address:'', price:1990,  },
        {id:2, name: 'Мария', email: 'mary.ivanova@mail.ru', phone:89995893410,address:'', price:7840,  },
         
    ]
    return await prisma.buyers.createMany({
        data
    });
  
}

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
            byers = await createByuers(),
            busket = await createBusket(),
            // productsInBusket = await createProductsInBusket(),
            // products = await createProducts(),
            // types = await createTypes(),
            // material = await createMaterial(),
            users = await createUsers();
        // console.log({orders, byers, users});
        
    } catch (error) {
      console.log('Error', error);
    } finally {
        prisma.$disconnect();
    }
    
}