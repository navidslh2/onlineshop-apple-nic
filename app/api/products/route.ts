import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await pool.query(
      " SELECT DISTINCT products.category_id, products.name AS product_name, capacity.name AS capacity, products.img,MIN(products_item.price) AS minPrice, GROUP_CONCAT(DISTINCT color.color_code) AS colors FROM products_item JOIN products ON products_item.product_id = products.id JOIN capacity ON products_item.capacity_id = capacity.id JOIN color ON products_item.color_id = color.id GROUP BY products.category_id, products.name, capacity.name, products.img; "
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("error fetching", error);
    return NextResponse.json({ error: "Failed to fetch products " });
  }
}
