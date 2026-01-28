import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

/* ================= UPDATE ================= */
export async function PUT(req, { params }) {
  try {
    const { id } = params; // ✅ CORRECT

    await connectDB();
    const body = await req.json();

    const updated = await Product.findByIdAndUpdate(
      id,
      {
        ...body,
        images: Array.isArray(body.images) ? body.images : [],
      },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 400 }
    );
  }
}

/* ================= DELETE ================= */
export async function DELETE(req, { params }) {
  try {
    const { id } = params; // ✅ CORRECT

    await connectDB();
    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 400 }
    );
  }
}
