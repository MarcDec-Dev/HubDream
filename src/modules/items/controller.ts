import type { Request, Response } from "express";
import { ItemsService } from "./service.js";

export class ItemsController {
  private service = new ItemsService();

  async create(req: Request, res: Response) {
    try {
      const item = await this.service.create(req.body);
      return res.status(201).json(item);
    } catch (err: any) {
      return res.status(400).json({ error: err?.message ?? "Bad Request" });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const type = req.query.type as any;
      const q = req.query.q as string | undefined;
      const items = await this.service.list(type, q);
      return res.json(items);
    } catch (err: any) {
      return res.status(400).json({ error: err?.message ?? "Bad Request" });
    }
  }
}
