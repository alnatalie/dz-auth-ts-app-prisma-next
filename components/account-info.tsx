import { Session } from "next-auth";
import {  FunctionComponent } from "react";



 export function AccountInfo({session, SignInButton, SignOutButton }: {session:Session | null, SignInButton:FunctionComponent, SignOutButton:FunctionComponent}){
    if (session?.user)
    return<>
        Signed in as {session.user?.name} ({session.user?.email}) <br />
        {session.user?.image && <img src={session.user.image} style={{width:'100px',borderRadius:'50%'}}/>}<br />
        <SignOutButton/>
    </>;
    return <>
    Not signed in <SignInButton/>
    </>
}

