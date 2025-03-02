import { CategoryList } from "@/components/category-list";

export default async function Page(){
    const 
        responce = await fetch('http://localhost:3000/api/category/'),
        categories = await responce.json();

    return <CategoryList categories={categories}/>
}