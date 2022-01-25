import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database
import mongoose from "mongoose";
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost/ras_restful");
  await console.log(`We're connected to database!`);
}

//method
app.get("/", (req, res) => {
  res.json({
    message: "Making Restful API",
  });
});

//port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
