import mongoose from "mongoose";
const { Schema } = mongoose;

const dataSchema = new Schema(
  {
    title: String,
    body: String,
    published: Boolean,
  },
  { timestamps: true }
);

const Data = mongoose.model("data", dataSchema);
