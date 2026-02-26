import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Erro ao fazer login: ${error.response.data}`);
      }
    } else {
      alert("Preencha os campos de email e senha para fazer login!");
    }
  };

  if (redirect || user) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="gap-8 mx-auto flex flex-col items-center max-w-96 w-full">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full border-gray-300 px-4 py-2 rounded-full border"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full border-gray-300 px-4 py-2 rounded-full border"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="cursor-pointer w-full bg-primary-400 font-bold text-white border-gray-300 px-4 py-2 rounded-full border">
            Login
          </button>
        </form>
        <p>
          Ainda não tem uma conta?{" "}
          <Link to="register" className="underline font-semibold">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
