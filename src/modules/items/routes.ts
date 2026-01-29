import { Router } from "express";
import { ensureAuth } from "../../shared/middlewares/ensure-auth.js";
import { ItemsController } from "./controller.js";

const itemsRoutes = Router();
const controller = new ItemsController();

itemsRoutes.use(ensureAuth);

itemsRoutes.post("/", (req, res) => controller.create(req, res));
itemsRoutes.get("/", (req, res) => controller.list(req, res));

export { itemsRoutes };
