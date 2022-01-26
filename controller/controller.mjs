import { Data } from "../models/models.mjs";

let userController = {
  login: (req, res) => {
    res.render("pages/login");
  },
  create: (req, res) => {
    res.render("pages/create");
  },
  show: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};

export { userController };
