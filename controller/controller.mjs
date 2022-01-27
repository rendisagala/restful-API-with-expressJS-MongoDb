import { Data } from "../models/models.mjs";
import { v4 as uuidv4 } from "uuid";

let userController = {
  login: (req, res) => {
    res.render("login.ejs");
  },
  index: (req, res) => {
    Data.find((err, users) => {
      if (err) {
        console.log(err);
      }
      res.render("index.ejs", { users: users });
    });
  },
  create: (req, res) => {
    res.render("register.ejs");

    res.redirect("login/index");
  },
  store: (req, res) => {
    const inputData = new Data({
      id: uuidv4(),
      fullName: req.body.fullName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      postedOn: Date.now(),
      tes: req.body.tes,
    });
    let data = Data(inputData);
    inputData.save((err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  },
  update: (req, res) => {},
  delete: (req, res) => {},
};

export { userController };
