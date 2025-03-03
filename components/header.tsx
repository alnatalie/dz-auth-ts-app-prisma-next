import {Navigation} from './navigation'
import { ReactNode } from "react"

export function Header({children = null}: {children:ReactNode}){
    return <header>
        <Navigation />
        {children}
    </header>
}