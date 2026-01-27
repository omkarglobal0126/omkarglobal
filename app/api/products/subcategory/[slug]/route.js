import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET(req, context) {
  await connectDB();

  // ✅ Next.js 16 async params
  const { slug } = await context.params;
  const subCategory = decodeURIComponent(slug);

  const products = await Product.find({ subCategory });

  return NextResponse.json(products);
}
