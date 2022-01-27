import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//template engine setup
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));
//serving static files (css,etc)

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/js")));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

// database
import { Data } from "./models/models.mjs";

//router
import { router } from "./router/router.mjs";
app.use(router);

//port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(Data());
});

export { app };
