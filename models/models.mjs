import mongoose from "mongoose";
const { Schema } = mongoose;

const dataSchema = new Schema(
  {
    fullName: String,
    email: String,
    userName: String,
    password: String,
  },
  { timestamps: true }
);

const Data = mongoose.model("data", dataSchema);

export { Data };
