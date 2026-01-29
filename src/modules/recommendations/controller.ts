import type { Request, Response } from "express";

export class RecommendationsController {
  async get(req: Request, res: Response) {
    return res.json({ message: "recommendations.get placeholder" });
  }
}
