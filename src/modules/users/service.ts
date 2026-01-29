import bcrypt from "bcrypt";
import { prisma } from "../../config/prisma.js";
import type { CreateUserDTO } from "../../domain/dtos/create-user.dto.js";

export class UsersService {
  async createUser(data: CreateUserDTO) {
    const email = data.email.trim().toLowerCase();
    const username = data.username.trim();

    // validações mínimas
    if (!email || !username || !data.displayName || !data.password) {
      throw new Error("Missing required fields");
    }

    // checar duplicidade
    const existing = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }]
      }
    });

    if (existing) {
      throw new Error("Email or username already in use");
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        displayName: data.displayName,
        passwordHash,
        profile: {
          create: {
            isPrivate: false
          }
        }
      },
      select: {
        id: true,
        email: true,
        username: true,
        displayName: true,
        createdAt: true
      }
    });

    return user;
  }
}
