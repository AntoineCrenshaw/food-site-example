import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './prisma'
import { PrismaClient } from '@prisma/client'


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Hardcoded admin for now — we'll make this dynamic later
        if (
          credentials.email === process.env.ADMIN_EMAIL &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: 'admin',
            name: 'Admin',
            email: credentials.email as string,
            role: 'admin'
          }
        }
        return null
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token) {
        session.user.role = token.role as string
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role ?? 'customer'
      }
      return token
    }
  },
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/account'
  }
})