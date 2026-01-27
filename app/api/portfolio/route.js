import connectDB from "@/lib/db";
import Portfolio from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const portfolios = await Portfolio.find().sort({ createdAt: -1 });
    return NextResponse.json(portfolios);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 },
    );
  }
}
