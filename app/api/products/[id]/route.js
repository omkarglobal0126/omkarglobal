// file path: app/api/products/[id]/route.js

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

// Specific Product UPDATE (PUT)
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = await params; // Next.js 15+ mein await zaroori hai
    const body = await req.json();

    const updatedProduct = await Product.findByIdAndUpdate(id, body, { 
      new: true, // Updated data return karega
      runValidators: true 
    });

    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProduct);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// Specific Product DELETE
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    
    const deletedProduct = await Product.findByIdAndDelete(id);
    
    if (!deletedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}