import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 });
  return NextResponse.json(products);
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // ✅ Expect images as ARRAY
    if (!Array.isArray(body.images) || body.images.length === 0) {
      return NextResponse.json(
        { error: "At least one image is required" },
        { status: 400 }
      );
    }

    const product = await Product.create({
      name: body.name,
      category: body.category,
      subCategory: body.subCategory,
      description: body.description,
      images: body.images, // ✅ direct array
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
