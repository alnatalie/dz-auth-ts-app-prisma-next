import { CategoryList } from "@/components/category-list";
import {prisma} from '@/prisma/prisma'

export default async function Page(){
    const 
        // responce = await fetch('http://localhost:3000/api/category/'),
        categories = await prisma.categories.findMany();

    return <> RSC
        <CategoryList categories={categories}/>
    
    </>
}