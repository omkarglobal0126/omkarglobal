import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Description from "@/models/Description";

// 1. GET ALL PRODUCTS
export async function GET() {
  try {
    await connectDB();
    const descriptions = await Description.find().sort({ createdAt: -1 });
    return NextResponse.json(descriptions);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}