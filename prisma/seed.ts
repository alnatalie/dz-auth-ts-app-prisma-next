
import { type User, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// async function createOrders(){
//     const data:OrderNumber[] = [
//         {id: 1, date:new Date , productName:'Кольцо серебрянное с фианитом', typeJewelry:1},
//         {id: 2, date:new Date , productName:'Ожерелье серебянное', typeJewelry:2} 
//     ]
//     return await prisma.orderNumber.createMany({
//         data
//     });
   
   
// }

// async function createByuers(){
//     const data: Buyers[] = [
//         {id:1, name: 'Анастасия', email: 'nastya111@mail.ru', phone:89135473219,adress:'', price:1990, orderNumberId:1 },
//         {id:2, name: 'Мария', email: 'mary.ivanova@mail.ru', phone:89995893410,adress:'', price:7840, orderNumberId:2 },
         
//     ]
//     return await prisma.buyers.createMany({
//         data
//     });
  
// }

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
            // orders = await createOrders(),
            // byers = await createByuers(),
            users = await createUsers();
        // console.log({orders, byers, users});
        
    } catch (error) {
      console.log('Error', error);
    } finally {
        prisma.$disconnect();
    }
    
}