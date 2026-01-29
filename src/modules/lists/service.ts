import { prisma } from "../../config/prisma.js";
import type { CreateListDTO } from "../../domain/dtos/create-list.dto.js";

export class ListsService {
  async create(ownerId: string, data: CreateListDTO) {
    const title = data.title?.trim();

    if (!title) throw new Error("Title is required");
    if (!data.type) throw new Error("Type is required");

    const list = await prisma.list.create({
      data: {
        ownerId,
        title,
        type: data.type,
        tags: data.tags ?? [],
        coverImageUrl: data.coverImageUrl ?? null,
        isPublic: data.isPublic ?? false,
        isHiddenFromVisitors: data.isHiddenFromVisitors ?? false
      },
      select: {
        id: true,
        title: true,
        type: true,
        tags: true,
        coverImageUrl: true,
        isPublic: true,
        isHiddenFromVisitors: true,
        createdAt: true
      }
    });

    return list;
  }

  async listMine(ownerId: string) {
    return prisma.list.findMany({
      where: { ownerId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        type: true,
        tags: true,
        coverImageUrl: true,
        isPublic: true,
        isHiddenFromVisitors: true,
        createdAt: true,
        updatedAt: true
      }
    });
  }
}
