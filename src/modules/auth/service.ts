import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../config/prisma.js";

type LoginDTO = {
  email: string;
  password: string;
};

export class AuthService {
  async login(data: LoginDTO) {
    const email = data.email?.trim().toLowerCase();
    const password = data.password;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || !user.passwordHash) {
      throw new Error("Invalid credentials");
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      throw new Error("Invalid credentials");
    }

    const secret = process.env.JWT_SECRET;
if (!secret) throw new Error("JWT_SECRET is not set");

const expiresIn = (process.env.JWT_EXPIRES_IN ?? "7d") as jwt.SignOptions["expiresIn"];

const token = jwt.sign(
  { sub: user.id } as jwt.JwtPayload,
  secret as jwt.Secret,
  { expiresIn }
);


    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        displayName: user.displayName
      }
    };
  }
}
