import "dotenv/config";
import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

router.get("/", async (req, res) => {
  connectDB();

  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/profile", async (req, res) => {
  // connectDB(); Não precisa conectar com o banco de dados, pois o token já tem as informações do usuário em cookies
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, JWT_SECRET_KEY, {}, (error, userInfo) => {
      if (error) throw error;

      res.json(userInfo);
    });
  } else {
    res.json(null); //Se não tiver token, retorna null para o front
  }
});

router.post("/", async (req, res) => {
  connectDB();

  const { name, email, password } = req.body; //Para que aconteça essa leitura, preciso criar a middleware
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const { _id } = newUserDoc;
    const newUserObj = { name, email, _id };

    jwt.sign(newUserObj, JWT_SECRET_KEY, {}, (error, token) => {
      if (error) throw error;
      res.cookie("token", token).json(newUserObj);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  connectDB();

  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
      const { name, _id } = userDoc;

      if (passwordCorrect) {
        const newUserObj = { name, email, _id };
        const token = jwt.sign(newUserObj, JWT_SECRET_KEY);

        res.cookie("token", token).json(newUserObj);
      } else {
        res.status(400).json("Senha inválida!");
      }
    } else {
      res.status(400).json("Usuário não encontrado!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").json("Deslogado com sucesso!");
  //res.cookie("token", "").json("Deslogado com sucesso!")
});

export default router;
