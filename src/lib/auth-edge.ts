import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

export const { auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
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
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role ?? 'customer'
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.role = token.role as string
      }
      return session
    }
  },
  session: { strategy: 'jwt' },
  pages: { signIn: '/account' }
})