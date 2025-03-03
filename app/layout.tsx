import '@/global.css'
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { ServerComponentAccountButton } from "@/components/account-button-server";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Header>
          <ServerComponentAccountButton/>
         </Header>
        <main>
          <h1>⚡️App Router</h1>
        {children}
        </main>
      </body>
    </html>
  );
}
