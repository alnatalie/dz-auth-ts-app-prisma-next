import { auth } from "@/auth"
import { ServerSession } from "@/components/my-account";


export default async function Page(){
    const session = await auth();
    return<>
    <h1>My account</h1>
     RSC session = {JSON.stringify(session)}
    <hr />
    server session = <ServerSession/>
    
    </>
}