import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import {prisma} from "@/prisma/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Yandex from "next-auth/providers/yandex"
import Vk from "next-auth/providers/vk"

const prismaDB = new PrismaClient();


export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {strategy: "jwt"},
    providers:[
        Google,
        Vk,
        Yandex,
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
          }),
          CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
              password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
              console.log('________ credentials', credentials);
              // Return null if user data could not be retrieved
      
              if ('1' === credentials?.username && '1' === credentials.password){
                const user = await prismaDB.user.findFirst({where:{id:'1'}});
                console.log('authorize user=', user);
                return user;
              }
              return null;
            }
          })
    ],
})