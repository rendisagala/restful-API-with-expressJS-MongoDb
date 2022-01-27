import mongoose from "mongoose";
const { Schema } = mongoose;
import { v4 as uuidv4 } from "uuid";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost/rasDb");
  await console.log(`database is connected!`);
}

const dataSchema = new Schema(
  {
    id: String,
    fullName: String,
    userName: String,
    email: String,
    password: String,
    postedOn: Date,
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);

export { Data };
