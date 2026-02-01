import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

// 1. GET ALL PRODUCTS
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// 2. CREATE NEW PRODUCT (Includes Fruits/Items)
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Validation
    if (
      !body.name ||
      !body.category ||
      !body.subCategory ||
      !Array.isArray(body.images) ||
      body.images.length === 0
    ) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Category, Sub-Category, Images)" },
        { status: 400 }
      );
    }

    // body mein 'items' (fruits) array automatic chala jayega agar schema updated hai
    const product = await Product.create(body);
    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

