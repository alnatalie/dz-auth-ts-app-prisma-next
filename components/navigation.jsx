import Link from "next/link"


const pages = [
    {href:'/', title: 'Home'},
    {href:'/pages-router', title: 'Page router'},
    // {href:'/custom', title: 'Custom router'},
    {href:'/account', title: 'My account(app)'},
    {href:'/pages-router/account', title: 'My account(page)'},
]

export function Navigation(){
    return <nav>
        <ul>
            {pages.map(({href,title})=> <li key={href}>
                <Link href={href}>
                {title}
                </Link>
            </li>)}
        </ul>
    </nav>
}