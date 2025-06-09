import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: AuthOptions = {
  providers: [
      CredentialsProvider({
          name: "credentials",
           credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
    },
          async authorize(credentials, req) {
       if (credentials?.username === "testuser" && credentials?.password === "testpass") {
          const user = {
            id: "1",
            name: "test",
            email: "test@example.com",
          };
          console.log("Mock Login Successful for:", user.email);
          return user; 
        }

      
     
      console.log("Invalid login attempt");  
      return null
    } 
      })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
      async jwt({ token, user }) {
          return { ...token, ...user };
      },
      async session({ session, token, user }) {
          session.user = token as any;
          return session;
      }
  }
};