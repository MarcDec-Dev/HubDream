import { Router } from "express";
import { RecommendationsController } from "./controller.js";

const recommendationsRoutes = Router();
const controller = new RecommendationsController();

recommendationsRoutes.get("/", (req, res) => controller.get(req, res));

export { recommendationsRoutes };
