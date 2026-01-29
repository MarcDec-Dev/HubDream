import { Router } from "express";
import { AuthController } from "./controller.js";

const authRoutes = Router();
const controller = new AuthController();

authRoutes.post("/login", (req, res) => controller.login(req, res));

export { authRoutes };
