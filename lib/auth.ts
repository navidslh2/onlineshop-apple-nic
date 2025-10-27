import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "./db";
import bcrypt from "bcryptjs"
import type { RowDataPacket } from "mysql2";



export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const [rows] = await pool.query<RowDataPacket[]>(
          "SELECT id, name, email, password FROM users WHERE email = ?",
          [credentials.email]
        );
        const users = rows;
        const user = users.length > 0 ? users[0] : null;
        if (!user) return null;
        const isValid = await bcrypt.compare(credentials.password, user.password) 
        if(!isValid) return null
        return{
          id:user.id,
          name:user.name,
          email:user.email
        }
      },
    }),
  ],
  pages: { signIn: "/Account/login"},
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  
};
