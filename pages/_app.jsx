import { SessionProvider } from "next-auth/react"
import {Header} from '@/components/header'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <>
  <SessionProvider session={session}>
  <Header/>
  <h1> 🦖 Page Router</h1>
      <main>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  </>;
}