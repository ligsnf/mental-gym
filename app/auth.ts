import NextAuth, { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/GitHub"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "../db"

export const authConfig = { 
  providers: [GitHub],
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({session, user}) {
      session.user.id = user.id
      return session
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const paths = ["/me", "/create"]
      const isProtected = paths.some((path) => nextUrl.pathname.startsWith(path))

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("api/auth/signin", nextUrl.origin)
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href)
        return Response.redirect(redirectUrl)
      }
      
      return true
    },
  }
} satisfies NextAuthConfig

export const { handlers, auth, signOut } = NextAuth(authConfig)

// import Credentials from 'next-auth/providers/credentials';
// import { compare } from 'bcrypt-ts';
// import { getUser } from 'app/db';
// import { authConfig } from 'app/auth.config';

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       async authorize({ email, password }: any) {
//         let user = await getUser(email);
//         if (user.length === 0) return null;
//         let passwordsMatch = await compare(password, user[0].password!);
//         if (passwordsMatch) return user[0] as any;
//       },
//     }),
//   ],
// });
