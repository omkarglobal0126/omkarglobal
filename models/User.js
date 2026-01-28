import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password store hoga
});

export default mongoose.models.authentications || mongoose.model("authentications", userSchema);