import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Em react não se pode retornar mais de 1 elemento - Solução: Seria trazer uma div para todos os elementos, porém ele teria uma div aleatória, sendo assim, para contornar essa div aleatória, posso deixar como uma tag vazia, chamada de fragmento no REACT

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
