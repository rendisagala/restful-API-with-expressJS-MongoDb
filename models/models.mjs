import mongoose from "mongoose";
const { Schema } = mongoose;

const dataSchema = new Schema(
  {
    id: String,
    fullName: String,
    email: String,
    userName: String,
    password: String,
    postedOn: Date,
  },
  { timestamps: true }
);

const Data = mongoose.model("data", dataSchema);

export { Data };
