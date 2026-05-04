import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import Account from "./pages/Account";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL; //URL para que o axios faça as requisições para o back-end
axios.defaults.withCredentials = true; //Permite que o axios envie cookies junto com as requisições

function App() {
  // Em react não se pode retornar mais de 1 elemento - Solução: Seria trazer uma div para todos os elementos, porém ele teria uma div aleatória, sendo assim, para contornar essa div aleatória, posso deixar como uma tag vazia, chamada de fragmento no REACT

  const [user, setUser] = useState(null); //Armazena info do usuário, sendo que inicialmente é null, pois não tem ninguém logado
  //user -> estado que armazena info do usuário
  //setUser -> função para atualizar o estado do usuário

  useEffect(() => {
    //useEffect para verificar se o usuário já está logado, sendo assim, não precisa logar toda vez que atualiza a página, pois o token de autenticação já tem as informações do usuário
    const axiosGet = async () => {
      const { data } = await axios.get("/users/profile");
      setUser(data);
    };
    axiosGet();
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/login/register"
          element={<Register setUser={setUser} />}
        />
        <Route path="/account/:subpage?" element={<Account user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
