import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Register = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password && name) {
      try {
        const { data: userDoc } = await axios.post("/users", {
          name,
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Erro ao cadastrar o usuário: ${error.response.data}`);
      }
    } else {
      alert("É necessário preencher todos os campos para concluir o cadastro!");
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="gap-8 mx-auto flex flex-col items-center max-w-96 w-full">
        <h1 className="text-3xl font-bold">Faça seu cadastro</h1>

        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border-gray-300 px-4 py-2 rounded-full border"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Registrar
          </button>
        </form>
        <p>
          Já tem uma conta?{" "}
          <Link to="/login" className="underline font-semibold">
            Logue aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
