import { prisma } from "../../config/prisma.js";
import type { Request, Response } from "express";
import { UsersService } from "./service.js";

export class UsersController {
  private service = new UsersService();

  async create(req: Request, res: Response) {
    try {
      const user = await this.service.createUser(req.body);
      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({
        error: err?.message ?? "Unexpected error"
      });
    }
  }

  async me(req: Request, res: Response) {
    const userId = (req as any).userId as string;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        displayName: true,
        createdAt: true,
        profile: {
          select: {
            bio: true,
            avatarUrl: true,
            isPrivate: true,
            themePrimary: true,
            themeSecondary: true,
            borderRadius: true
          }
        }
      }
    });

    return res.json(user);
  }
}
