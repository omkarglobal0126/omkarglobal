import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ["Food & Agriculture", "Handicrafts & Industrial", "Lifestyle & Fashion"],
    },
    subCategory: { type: String, required: true, trim: true },
    // Naya field: Fruits ya items ki list ke liye
    items: {
      type: [String], 
      default: [],
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: "At least one image is required",
      },
    },
    description: { type: String, trim: true },
  },
  { timestamps: true, autoIndex: false }
);

ProductSchema.index({ category: 1, subCategory: 1 });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);