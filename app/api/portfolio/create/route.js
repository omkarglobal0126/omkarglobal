import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import User from "@/models/Product";

// Helper: Cloudinary Upload Stream
const uploadToCloudinary = async (file, folder) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder, resource_type: "auto" }, (error, result) =>
        error ? reject(error) : resolve(result.secure_url),
      )
      .end(buffer);
  });
};

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();

    // 1. Upload Thumbnail
    const thumbnailFile = formData.get("thumbnail");
    if (!thumbnailFile)
      return NextResponse.json({ error: "Thumbnail missing" }, { status: 400 });
    const thumbnailUrl = await uploadToCloudinary(
      thumbnailFile,
      "portfolio/thumbnails",
    );

    // 2. Upload Multiple Gallery Files
    const galleryFiles = formData.getAll("galleryFiles");
    const galleryUrls = await Promise.all(
      galleryFiles.map((file) => uploadToCloudinary(file, "portfolio/gallery")),
    );

    // 3. Save to DB
    const newProject = await User.create({
      title: formData.get("title"),
      name: formData.get("title"),
      location: formData.get("location"),
      description: formData.get("description"),
      category: formData.get("category"),
      date: formData.get("date"),
      slug: formData.get("slug"),
      thumbnail: thumbnailUrl,
      gallery: galleryUrls,
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
