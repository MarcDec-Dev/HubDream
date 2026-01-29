import express from "express";
import cors from "cors";
import { routes } from "./routes/index.js";

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Conecta todas as rotas do projeto
app.use(routes);

export { app };
