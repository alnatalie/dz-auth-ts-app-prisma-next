import Link from "next/link"
import { ReactNode } from "react"


const pages = [
    {href:'/', title: 'Home'},
    {href:'/pages-router', title: 'Page router'},
    // {href:'/custom', title: 'Custom router'},

    {href:'/account', title: 'My account(app)'},
    {href:'/pages-router/account', title: 'My account(page)'},

    {href:'/category', title: 'Category list(app)'},
    {href:'/pages-router/category-list', title: 'Category list(page)'},

    {href:'/buyer-list', title: 'Buyers list(app)'},
    {href:'/pages-router/buyers-list', title: 'Buyers list(pages)'},

   
]


export function Navigation({children}: {children:ReactNode}){
    return <nav>
        <ul>
            {pages.map(({href,title})=> <li key={href}>
                <Link href={href}>
                {title}
                </Link>
            </li>)}
        </ul>
        {children}
    </nav>
}