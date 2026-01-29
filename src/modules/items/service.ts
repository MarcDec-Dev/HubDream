import { prisma } from "../../config/prisma.js";
import type { CreateItemDTO } from "../../domain/dtos/create-item.dto.js";

export class ItemsService {
  async create(data: CreateItemDTO) {
    const title = data.title?.trim();
    if (!title) throw new Error("Title is required");
    if (!data.type) throw new Error("Type is required");

    return prisma.item.create({
      data: {
        title,
        type: data.type,
        genres: data.genres ?? [],
        synopsis: data.synopsis ?? null,
        coverImageUrl: data.coverImageUrl ?? null
      },
      select: {
        id: true,
        title: true,
        type: true,
        genres: true,
        synopsis: true,
        coverImageUrl: true,
        createdAt: true
      }
    });
  }

  async list(type?: CreateItemDTO["type"], q?: string) {
    return prisma.item.findMany({
      where: {
        ...(type ? { type } : {}),
        ...(q
          ? { title: { contains: q, mode: "insensitive" } }
          : {})
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        type: true,
        genres: true,
        coverImageUrl: true,
        createdAt: true
      }
    });
  }
}
