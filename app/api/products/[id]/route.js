import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

/* ================= UPDATE ================= */
export async function PUT(req, context) {
  const { id } = await context.params; // ✅ FIX

  await connectDB();
  const body = await req.json();

  const updated = await Product.findByIdAndUpdate(
    id,
    {
      ...body,
      images: body.images
        ? body.images.split(",").map((i) => i.trim())
        : [],
    },
    { new: true }
  );

  return NextResponse.json(updated);
}

/* ================= DELETE ================= */
export async function DELETE(req, context) {
  const { id } = await context.params; // ✅ FIX

  await connectDB();
  await Product.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
