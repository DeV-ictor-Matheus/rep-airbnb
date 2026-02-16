import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="gap-8 mx-auto flex flex-col items-center max-w-96 w-full">
        <h1 className="text-3xl font-bold">Faça seu login</h1>
        <form className="flex flex-col gap-2 w-full">
          <input
            type="email"
            className="w-full border-gray-300 px-4 py-2 rounded-full border"
            placeholder="Digite seu e-mail"
          />
          <input
            type="password"
            className="w-full border-gray-300 px-4 py-2 rounded-full border"
            placeholder="Digite sua senha"
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
