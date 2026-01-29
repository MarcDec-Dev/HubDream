import { Router } from "express";
import { UsersController } from "./controller.js";
import { ensureAuth } from "../../shared/middlewares/ensure-auth.js";

const usersRoutes = Router();
const controller = new UsersController();

usersRoutes.post("/", (req, res) => controller.create(req, res));
usersRoutes.get("/me", ensureAuth, (req, res) => controller.me(req, res));

export { usersRoutes };
