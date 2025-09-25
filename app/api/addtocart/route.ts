import pool from "@/lib/db";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const {email, productItemId} = await req.json()
    const connection = await pool.getConnection()
    try{
        await connection.beginTransaction()
        const [rows] = await connection.query<RowDataPacket[]>("SELECT cart.id AS id FROM cart JOIN users ON users.id = cart.user_id WHERE users.email = ? AND cart.status = 'active'",[email])

        let cartId
        if(rows.length === 0){
            const [result] = await connection.query<ResultSetHeader>("INSERT INTO cart (user_id , status) SELECT users.id, 'active' FROM users WHERE users.email = ?",[email])
            cartId = result.insertId
        }else{
            cartId= rows[0].id
        }
        const [result] = await connection.query<RowDataPacket[]>("SELECT cart_item.id AS cartItemId FROM cart_item WHERE cart_item.cart_id = ? AND cart_item.product_item_id =  ?",[cartId,productItemId])
        if( result.length ===0 ){
            await connection.query("INSERT INTO cart_item (cart_id,product_item_id,quantity) VALUES(?,?,1)",[cartId,productItemId])
        }else{
            await connection.query("UPDATE cart_item SET quantity = quantity+1  WHERE id = ?",[result[0]?.cartItemId])
 
        }
        await connection.commit()
        return NextResponse.json({success: true, cartId:cartId, message:"add to cart successfully"})
    }catch(error:any){
        await connection.rollback()
        console.log(error)
        return NextResponse.json({success: false, message:"add to cart is not successful", error:error.message }),{status:500}
    }finally{
        connection.release()
    }}
