import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const {email} = await req.json()
    if(!email) return NextResponse.json({ error: "Email is required" }, { status: 400 })
    try{
        const [rows] = await pool.query("SELECT cart_item.product_item_id AS productId, cart_item.quantity AS quantity FROM cart_item JOIN cart ON cart_item.cart_id = cart.id JOIN users ON users.id = cart.user_id  WHERE users.email = ? AND cart.status = 'active'",[email])
        return NextResponse.json(rows)
    }catch(error){
        console.error("error fetching", error)
        return NextResponse.json({error: "Failed to fetch cart "})
    }
}

