import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";
import cors from "cors";

const app = express();
const { PORT } = process.env;

app.use(express.json()); //Middleware para ler o corpo da requisição para ler os dados enviados pelo front
app.use(cors()); //Middleware para permitir requisições de outros domínios, como o front-end
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
