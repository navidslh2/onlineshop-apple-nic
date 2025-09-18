import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const {id} = await req.json()
    try{
        const [rows] = await pool.query("SELECT cart_item.product_item_id AS productId FROM cart_item JOIN cart ON cart_item.cart_id = cart.id WHERE cart.user_id = ?",[id])
        return NextResponse.json(rows)
    }catch(error){
        console.error("error fetching", error)
        return NextResponse.json({error: "Failed to fetch cart "})
    }
}