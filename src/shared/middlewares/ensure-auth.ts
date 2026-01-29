import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

type JwtPayload = {
  sub: string;
};

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Missing Authorization header" });
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(401).json({ error: "Invalid Authorization format" });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ error: "JWT_SECRET is not set" });
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    // anexar userId na request
    (req as any).userId = decoded.sub;
    return next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}
