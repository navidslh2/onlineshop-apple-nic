import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const email= await req.json()
        const [rows] = await pool.query("SELECT email FROM users WHERE email = ? ",[email])
        return NextResponse.json(rows)
    }catch(error){
        console.log(error)
        return NextResponse.json({error:"fail to check a email"})
    } 
    
}