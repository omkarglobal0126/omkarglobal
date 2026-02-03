import mongoose from "mongoose";

const DescriptionSchema = new mongoose.Schema(
  {
    fruits: { type: String },
    image: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.description ||
  mongoose.model("description", DescriptionSchema);
