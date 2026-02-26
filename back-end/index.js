import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const { PORT } = process.env;

app.use(express.json()); //Middleware para ler o corpo da requisição para ler os dados enviados pelo front
app.use(cookieParser()); //Middleware para ler os cookies enviados pelo front-end, como o token de autenticação
app.use(
  cors({
    origin: "http://localhost:5173", //Permite que o front-end faça requisições para o back-end
    credentials: true, //Permite que o front-end envie cookies junto com as requisições para o back-end
  }),
); //Middleware para permitir requisições de outros domínios, como o front-end
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
