import { ClientComponentAccountButton } from '@/components/account-button-client';
import { Header } from '@/components/header';
import '@/global.css'
import { SessionProvider } from "next-auth/react"
import { AppProps } from 'next/app';


export default function App({ Component,
   pageProps: { session, ...pageProps } } :AppProps) {
  return <>
  <SessionProvider session={session}>
  <Header>
    <ClientComponentAccountButton/>
  </Header>
  <h1> 🦖 Page Router</h1>
      <main>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  </>;
}