//DATABASE
import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexão com o banco efetivada com sucesso!");
  } catch (error) {
    console.log("Sem conexão com o banco de dados!", error);
  }
};

connectDB();
