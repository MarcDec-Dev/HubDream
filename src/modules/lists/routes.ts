import { Router } from "express";
import { ensureAuth } from "../../shared/middlewares/ensure-auth.js";
import { ListsController } from "./controller.js";

const listsRoutes = Router();
const controller = new ListsController();

listsRoutes.use(ensureAuth);

listsRoutes.post("/", (req, res) => controller.create(req, res));
listsRoutes.get("/mine", (req, res) => controller.mine(req, res));

export { listsRoutes };
