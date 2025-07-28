import pool from "@/lib/db";
import { NextResponse } from "next/server";




interface Product   {
  id: number;
  product_id: number;
  capacity_id: number;
  color_id: number;
  part_number_id: number;
  active_status_id: number;
  price: number;
  discount_price: number;
  stock: number;
}

export async function GET() {
  try {
    const [rows] = await pool.query ('SELECT * FROM products_item')
    return NextResponse.json(rows)
  }catch (error) {
    console.error("error fetching", error)
    return NextResponse.json({ error: 'Failed to fetch ' })
  }
  
}
