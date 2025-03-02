
import { type User, Buyers, Categories, Materials, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function createMaterials() {
    const data:Materials[] = [
        {id: 1, name: "Золото" },
        {id: 2, name: "Серебро" },
        {id: 3, name: "Бижутерия" },
    ]
    return await prisma.materials.createMany({
        data
    });
    
}

async function createCategories() {
    const data:Categories[] = [
        {id: 1, nameCategory: "Серьги" },
        {id: 2, nameCategory: "Кольцо" },
        {id: 3, nameCategory: "Ожерелье" },
        {id: 4, nameCategory: "Моносерьга" },
        {id: 5, nameCategory: "Кулон" },
        {id: 6, nameCategory: "Браслет" },
    ]
    return await prisma.categories.createMany({
        data
    });
    
}

main();

async function createByuers(){
    const data: Buyers[] = [
        {id:1, 
            name: 'Анастасия', 
            email: 'nastya111@mail.ru', phone:'89135473219',
            sity:'Москва', 
            address:'улица Ленина, 7' },
        {id:2, 
            name: 'Мария', 
            email: 'mary.ivanova@mail.ru', phone:'89995893410',sity:'Новосибирск', address:'проспек Димитрова 32'},
        {id:3, 
            name: 'Михаил', 
            email: 'mihail111@gmail.com', phone:"89993219900",sity:"Красноярск", 
            address:"улица Мира, 43"},
        {id:4, 
            name: 'Кристина', 
            email: 'kris98@mail.ru', phone:"89532227819",
            sity:"Казань", 
            address:"улица Серафимовича,20"}
         
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
            buyers = await createByuers(),
            categories = await createCategories(),
            material = await createMaterials(),
            users = await createUsers();
            // busket = await createBusket(),
            // products = await createProducts(),
        console.log({buyers, categories, material, users});
        
    } catch (error) {
      console.log('Error', error);
    } finally {
        prisma.$disconnect();
    }
    
}