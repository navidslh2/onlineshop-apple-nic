import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req:Request) {
    const {email, productId} = await req.json()
    try{
        const [result] = await pool.query("DELETE cart_item FROM cart_item JOIN cart ON cart_item.cart_id = cart.id JOIN users ON users.id = cart.user_id  WHERE users.email = ? AND cart_item.product_item_id = ?",[email, productId])
        return NextResponse.json(result)
    }catch(error){
        console.error("error fetching", error)
        return NextResponse.json({error: "Failed to fetch deleteCartProduct "})
    }
}