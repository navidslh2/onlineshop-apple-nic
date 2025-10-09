import pool from "@/lib/db";
import type { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";


export async function POST (req:Request) {
    const {userId, productId, rating} =await req.json()
    const connection = await pool.getConnection()
    try{
        await connection.beginTransaction()
        const [result] = await pool.query<RowDataPacket[]>("SELECT id FROM rating WHERE product_item_id =? AND user_id =?",[productId,userId])
        if(result.length === 0){
            await pool.query("INSERT INTO rating( user_id, product_item_id, rating) VALUES (?,?,?)",[userId,productId,rating])
            await connection.commit()
            return NextResponse.json({succes:true})
        }else{
            await connection.commit()
            return NextResponse.json({success:true, message:'You have already rated'})
        }
    }catch(error: any){
        await connection.rollback()
        console.log(error)
        return NextResponse.json({success: false, message:"rating is not successful", error:error.message })
        
    }finally{
        connection.release()
    }
}