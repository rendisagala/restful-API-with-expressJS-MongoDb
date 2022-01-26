import { Data } from "../models/models.mjs";
import { v4 as uuidv4 } from "uuid";

let userController = {
  login: (req, res) => {
    res.render("pages/login");
  },
  index: (req, res) => {
    res.render("pages/index");
  },
  create: (req, res) => {
    const post = new Data({
      id: uuidv4(),
      fullName: req.body.fullName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });

    post.save((err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });

    res.render("pages/create");
  },
  show: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};

export { userController };
