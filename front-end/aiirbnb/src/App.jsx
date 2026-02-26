import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Register from "./pages/Register";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL; //URL para que o axios faça as requisições para o back-end
axios.defaults.withCredentials = true; //Permite que o axios envie cookies junto com as requisições

function App() {
  // Em react não se pode retornar mais de 1 elemento - Solução: Seria trazer uma div para todos os elementos, porém ele teria uma div aleatória, sendo assim, para contornar essa div aleatória, posso deixar como uma tag vazia, chamada de fragmento no REACT

  const [user, setUser] = useState(null);

  useEffect(() => {
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
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
