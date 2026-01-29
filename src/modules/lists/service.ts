import { prisma } from "../../config/prisma.js";
import type { CreateListDTO } from "../../domain/dtos/create-list.dto.js";

export class ListsService {
  async create(ownerId: string, data: CreateListDTO) {
    const title = data.title?.trim();

    if (!title) throw new Error("Title is required");
    if (!data.type) throw new Error("Type is required");

    return prisma.list.create({
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

  async addItemToList(ownerId: string, listId: string, itemId: string) {
    const list = await prisma.list.findFirst({
      where: { id: listId, ownerId }
    });

    if (!list) throw new Error("List not found");

    const item = await prisma.item.findUnique({
      where: { id: itemId },
      select: { id: true }
    });

    if (!item) throw new Error("Item not found");

    return prisma.listItem.create({
      data: { listId, itemId }
    });
  }

  async getItems(ownerId: string, listId: string) {
    const list = await prisma.list.findFirst({
      where: { id: listId, ownerId },
      select: { id: true }
    });

    if (!list) throw new Error("List not found");

    return prisma.listItem.findMany({
      where: { listId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        createdAt: true,
        item: {
          select: {
            id: true,
            title: true,
            type: true,
            genres: true,
            synopsis: true,
            coverImageUrl: true,
            createdAt: true
          }
        }
      }
    });
  }
}
