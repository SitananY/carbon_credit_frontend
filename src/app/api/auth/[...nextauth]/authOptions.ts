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
            name: "Test User",
            email: "test@example.com",
            image: "https://www.gravatar.com/avatar/a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1?s=200" // รูปโปรไฟล์ (Optional)
          };
          console.log("Mock Login Successful for:", user.email);
          return user; 
        }

      
      const res = await fetch("/your/endpoint", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()

      
      if (res.ok && user) {
        return user
      }
      
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