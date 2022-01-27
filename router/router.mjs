import express from "express";
import { userController } from "../controller/controller.mjs";

const router = express.Router();

router.route("/login").get(userController.login).post(userController.store);

router.get("/", userController.login);

router.get("/login/register", userController.create);
router.get("/login/index", userController.index);
router.get("login/:userName", userController.index);
router.post("login/register", userController.create);
router.put("login/:userName", userController.update);
router.delete("login/:userName", userController.delete);

export { router };
