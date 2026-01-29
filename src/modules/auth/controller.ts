import type { Request, Response } from "express";
import { AuthService } from "./service.js";

export class AuthController {
  private service = new AuthService();

  async login(req: Request, res: Response) {
    try {
      const result = await this.service.login(req.body);
      return res.json(result);
    } catch (err: any) {
      return res.status(401).json({
        error: err?.message ?? "Unauthorized"
      });
    }
  }
}
