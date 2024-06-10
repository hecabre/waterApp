import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB);
  } catch (e) {
    throw new Error(e);
  }
};
