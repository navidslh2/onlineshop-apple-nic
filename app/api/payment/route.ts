import pool from "@/lib/db"
import { NextResponse } from "next/server"


export async function POST(req:Request) {
    const {cartId} = await req.json()
    const connection = await pool.getConnection()

    try{
        await connection.beginTransaction()  
        await connection.query('UPDATE products_item JOIN cart_item ON cart_item.product_item_id = products_item.id SET products_item.stock = products_item.stock- cart_item.quantity WHERE cart_item.cart_id = ?',[cartId])
        
        await connection.query("UPDATE cart SET cart.status = 'complete' WHERE cart.id = ?",[cartId])

        await connection.commit()
        return NextResponse.json({success: true, message:"payment is successfully"})
    }catch(error:unknown){
        await connection.rollback()
        console.log(error)
        return NextResponse.json({success: false, message:"payment is not successful"},{status:500})
    } finally {
        connection.release()
    }
    
}