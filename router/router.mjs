import express from "express";
import { userController } from "../controller/controller.mjs";

const router = express.Router();

router.route("/login").get(userController.login).post(userController.create);

router.get("");

export { router };
