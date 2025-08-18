import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await pool.query(
      " SELECT DISTINCT products.category_id, products.name AS product_name,categories.parent_id AS parentId, categories.name AS categoriesName, capacity.name AS capacity,categories.eName AS eName, products.img,MIN(products_item.price) AS minPrice, GROUP_CONCAT(DISTINCT color.color_code) AS colors, brand_name as brand, simcard.name as simcard,stock FROM products_item JOIN products ON products_item.product_id = products.id  LEFT JOIN capacity ON products_item.capacity_id = capacity.id JOIN brand on products_item.brand = brand.id LEFT JOIN simcard ON products_item.simcard = simcard.id JOIN color ON products_item.color_id = color.id JOIN categories on products.category_id = categories.id GROUP BY products.category_id, products.name, capacity.name, products.img ORDER BY stock =0 ASC "
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("error fetching", error);
    return NextResponse.json({ error: "Failed to fetch products " });
  }
}


