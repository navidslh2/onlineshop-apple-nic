import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT product_item_id AS productItemId,AVG(rating) AS avgRating, COUNT(rating) AS count FROM rating  GROUP BY product_item_id;");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("error fetching", error);
    return NextResponse.json({ error: "Failed to fetch rating" });
  }
}
