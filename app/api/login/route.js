import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import mongoose from "mongoose";
import User from "@/models/User"; // Apka model path
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";

export async function POST(request) {
  const { username, password } = await request.json();

  await connectDB();

  // 1. User find karein
  const user = await User.findOne({ username });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }

  // 2. Password compare karein (Hash vs Plaintext)
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }

  // 3. Token Generate
  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  // 4. Cookie Set
  const cookie = serialize("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Live site par true hoga
    sameSite: "strict",
    maxAge: 86400, // 1 day
    path: "/",
  });

  const response = NextResponse.json({ message: "Login successful" });
  response.headers.set("Set-Cookie", cookie);
  return response;
}
