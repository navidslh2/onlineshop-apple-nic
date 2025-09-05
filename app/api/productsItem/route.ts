import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const [rows] = await pool.query(
            "SELECT products_item.id AS id, products_item.capacity_id AS categoryId,products.name AS productName, capacity.name AS capacity,monitor_size.name AS monitorSize, color.name AS color, part_number.name AS partNumber, active_status.name AS activeStatus, brand.brand_name AS brand, simcard.name AS simcard, warranty.name AS warranty, products_item.price AS price, products_item.stock AS stock, images.url AS url, capacity.eName AS capacityEName, categories.eName AS categoryEName, products.eName AS productEName FROM products_item JOIN products ON products_item.product_id = products.id LEFT JOIN capacity ON products_item.capacity_id = capacity.id LEFT JOIN monitor_size ON products_item.monitor_id = monitor_size.id JOIN color ON products_item.color_id = color.id LEFT JOIN part_number ON products_item.part_number_id = part_number.id LEFT JOIN active_status ON products_item.activeStatusId = active_status.id JOIN brand ON products_item.brand = brand.id LEFT JOIN simcard ON products_item.simcard = simcard.id LEFT JOIN warranty ON products_item.warranty = warranty.id LEFT JOIN images ON images.id = products_item.image_id JOIN categories ON products.category_id = categories.id "
        )
        return NextResponse.json(rows)
    }catch (error){
         console.error("error fetching", error);
         return NextResponse.json({ error: "Failed to fetch products " });
    }
}


