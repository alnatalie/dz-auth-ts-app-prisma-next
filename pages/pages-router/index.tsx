import { signIn, signOut, useSession} from "next-auth/react"

export default function Page(){
    return <>
    <h2> Home </h2>
    <Account />
    </>
}

function Account(){
    const {data: session} = useSession();
    console.debug('session=', session)
    if (session) {
        return (
            // const {user} = session;
          <>
          <fieldset>
            Signed in as  {session.user?.name} ({session.user?.email}) <br />
            {session.user?.image && <img src={session.user.image} style={{width:'100px',borderRadius:'50%'}}/>}<br />
            <button onClick={() => signOut()}>Sign out</button>

          </fieldset>
          </>
        )
      }
      return (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )

}