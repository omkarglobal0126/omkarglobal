import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import User from "@/models/Product";

/**
 * HELPER: Uploads a file buffer to Cloudinary
 */
const uploadToCloudinary = async (file, folder) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder, resource_type: "auto" }, (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);
      })
      .end(buffer);
  });
};

/* ==========================================================
   PUT: Update Project (Granular Gallery Management)
   ========================================================== */
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { slug } = await params;

    const formData = await req.formData();
    const project = await User.findOne({ slug });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // 1. Update Basic Fields
    project.title = formData.get("title") || project.title;
    project.location = formData.get("location") || project.location;
    project.description = formData.get("description") || project.description;
    project.category = formData.get("category") || project.category;
    project.date = formData.get("date") || project.date;

    // 2. Handle Thumbnail Update
    const newThumb = formData.get("thumbnail");
    // Check if it's a new File object (not a string URL)
    if (newThumb && typeof newThumb !== "string" && newThumb.size > 0) {
      project.thumbnail = await uploadToCloudinary(
        newThumb,
        "portfolio/thumbnails",
      );
    }

    // 3. Granular Gallery Management

    // Step A: Remove marked URLs
    const removedData = formData.get("removedGalleryUrls");
    if (removedData) {
      const urlsToRemove = JSON.parse(removedData);
      if (urlsToRemove.length > 0) {
        project.gallery = project.gallery.filter(
          (url) => !urlsToRemove.includes(url),
        );
      }
    }

    // Step B: Append New Gallery Files
    const newGalleryFiles = formData.getAll("galleryFiles");
    if (newGalleryFiles.length > 0) {
      const uploadPromises = newGalleryFiles
        .filter((file) => file.size > 0) // Ensure file is valid
        .map((file) => uploadToCloudinary(file, "portfolio/gallery"));

      const newUploadedUrls = await Promise.all(uploadPromises);

      // Merge new URLs with existing ones
      project.gallery = [...project.gallery, ...newUploadedUrls];
    }

    // Save changes to MongoDB
    await project.save();

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/* ==========================================================
   DELETE: Remove Project
   ========================================================== */
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { slug } = await params;

    const project = await User.findOne({ slug });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Pro Tip: Clean up Cloudinary before deleting from DB
    // We only delete from DB here for simplicity
    await User.findOneAndDelete({ slug });

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
