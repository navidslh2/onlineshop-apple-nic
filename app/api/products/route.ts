import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT DISTINCT products.category_id, products.name AS product_name, capacity.name AS capacity, products.img FROM products_item JOIN products ON products_item.product_id = products.id JOIN capacity ON products_item.capacity_id = capacity.id   "
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("error fetching", error);
    return NextResponse.json({ error: "Failed to fetch products " });
  }
}
