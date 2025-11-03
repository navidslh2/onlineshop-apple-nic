import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { pathname } = await req.json();

    await pool.query("INSERT INTO visits (page) VALUES (?)", [pathname]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
