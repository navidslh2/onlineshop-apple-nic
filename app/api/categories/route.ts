import pool from "@/lib/db";
import {  NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM categories");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("error fetching", error);
    return NextResponse.json({ error: "Failed to fetch categories " });
  }
}
