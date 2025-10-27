import pool from "@/lib/db";
import type { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const email= await req.json()
        const [rows] = await pool.query<RowDataPacket[]>("SELECT email FROM users WHERE email = ? ",[email])
        const result = rows.length > 0
        return NextResponse.json({result:result, email: result ? rows[0].email : undefined})
    }catch(error){
        console.log(error)
        return NextResponse.json({error:"fail to check a email"})
    } 
    
}