import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema(
  {
    Author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshtoken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Password", PasswordSchema);
