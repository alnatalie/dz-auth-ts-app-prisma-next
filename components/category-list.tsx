import { Categories } from "@prisma/client"

export function CategoryList({categories}: {categories: Categories[]}){
    return<>
        <ol>
            {categories.map(({id, nameCategory})=>
            <li key={id}>
                {nameCategory}
            </li>
            )}

        </ol>
        
    </>
   

}