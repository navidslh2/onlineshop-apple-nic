import pool from "@/lib/db";
import type { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";


export async function POST (req:Request) {
    const {email, categoryId, rating} =await req.json()
    const connection = await pool.getConnection()
    try{
        await connection.beginTransaction()
        const [result] = await pool.query<RowDataPacket[]>("SELECT rating.id FROM rating JOIN users ON rating.user_id = users.id WHERE rating.product_item_id =? AND users.email =?",[categoryId,email])
        if(result.length === 0){
            await pool.query("INSERT INTO rating (user_id, product_item_id, rating) VALUES ((SELECT id FROM users WHERE email = ?), ?, ?)",[email,categoryId,rating])
            await connection.commit()
            return NextResponse.json({succes:true})
        }else{
            await connection.commit()
            return NextResponse.json({success:true, message:'You have already rated'})
        }
    }catch(error: unknown){
        await connection.rollback()
        console.log(error)
        return NextResponse.json({success: false, message:"rating is not successful"})
        
    }finally{
        connection.release()
    }
}