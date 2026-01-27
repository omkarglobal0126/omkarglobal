import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Food & Agriculture",
        "Handicrafts & Industrial",
        "Lifestyle & Fashion",
      ],
    },

    subCategory: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      required: true,
    },

    description: String,
  },
  {
    timestamps: true,
    autoIndex: false, // ✅ prevents accidental unique index recreation
  }
);

/* optional performance index (NOT unique) */
ProductSchema.index({ category: 1, subCategory: 1 });

export default mongoose.models.Product1 ||
  mongoose.model("Product1", ProductSchema);
