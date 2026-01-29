import { Router } from "express";
import { usersRoutes } from "../modules/users/routes.js";
import { prisma } from "../config/prisma.js";
import { authRoutes } from "../modules/auth/routes.js";
import { listsRoutes } from "../modules/lists/routes.js";
import { itemsRoutes } from "../modules/items/routes.js";





const routes = Router();

routes.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    service: "HubDream API",
    timestamp: new Date().toISOString()
  });
});
routes.get("/debug/users", async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      username: true,
      displayName: true,
      createdAt: true
    }
  });

  return res.json(users);
});


// REGISTRO DAS ROTAS DE USUÁRIO
routes.use("/auth", authRoutes);
routes.use("/users", usersRoutes);
routes.use("/lists", listsRoutes);
routes.use("/items", itemsRoutes);




export { routes };
