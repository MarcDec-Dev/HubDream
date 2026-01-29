import type { Request, Response } from "express";
import { ListsService } from "./service.js";

export class ListsController {
  private service = new ListsService();

  async create(req: Request, res: Response) {
    try {
      const ownerId = (req as any).userId as string;
      const list = await this.service.create(ownerId, req.body);
      return res.status(201).json(list);
    } catch (err: any) {
      return res.status(400).json({ error: err?.message ?? "Bad Request" });
    }
  }

  async mine(req: Request, res: Response) {
    try {
      const ownerId = (req as any).userId as string;
      const lists = await this.service.listMine(ownerId);
      return res.json(lists);
    } catch (err: any) {
      return res.status(400).json({ error: err?.message ?? "Bad Request" });
    }
  }
}
