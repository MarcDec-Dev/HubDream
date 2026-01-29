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

  async addItem(req: Request, res: Response) {
  try {
    const rawOwnerId = (req as any).userId;
    const rawListId = (req.params as any)?.listId;
    const rawItemId = (req.body as any)?.itemId;

    if (typeof rawOwnerId !== "string" || !rawOwnerId.trim()) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (typeof rawListId !== "string" || !rawListId.trim()) {
      return res.status(400).json({ error: "listId is required" });
    }

    if (typeof rawItemId !== "string" || !rawItemId.trim()) {
      return res.status(400).json({ error: "itemId must be a string" });
    }

    const ownerId = rawOwnerId.trim();
    const listId = rawListId.trim();
    const itemId = rawItemId.trim();

    const link = await this.service.addItemToList(ownerId, listId, itemId);
    return res.status(201).json(link);
  } catch (err: any) {
    return res.status(400).json({ error: err?.message ?? "Bad Request" });
  }
}


  async items(req: Request, res: Response) {
  try {
    const rawOwnerId = (req as any).userId;
    const rawListId = (req.params as any)?.listId;

    if (typeof rawOwnerId !== "string" || !rawOwnerId.trim()) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (typeof rawListId !== "string" || !rawListId.trim()) {
      return res.status(400).json({ error: "listId is required" });
    }

    const ownerId = rawOwnerId.trim();
    const listId = rawListId.trim();

    const data = await this.service.getItems(ownerId, listId);
    return res.json(data);
  } catch (err: any) {
    return res.status(400).json({ error: err?.message ?? "Bad Request" });
  }
}
}
