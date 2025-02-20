import { auth, signIn, signOut, } from "@/auth"


export async function Account() {
    const session = await auth();
    
    if (session?.user) {
            return (
                // const {user} = session;
              <>
                Signed in as {session.user?.name} ({session.user?.email}) <br />
                {session.user?.image && <img src={session.user.image} style={{width:'100px',borderRadius:'50%'}}/>}<br />
                <SignOut/>
              </>
            )
          }
          return (
                  <SignIn />
                )
}

export function SignIn() {
    return (
      <>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type="submit">Sign in</button>
        </form>
      </>
    );
  }

export function SignOut(){
    return(
        <form 
        action={async()=>{
            "use server"
            await signOut()
        }}>
            <button>Sign out</button>
        </form>
    )
}