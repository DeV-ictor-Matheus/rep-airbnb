import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  //Em react não se pode retornar mais de 1 elemento - Solução: Seria trazer uma div para todos os elementos, porém ele teria uma div aleatória, sendo assim, para contornar essa div aleatória, posso deixar como uma tag vazia, chamada de fragmento no REACT

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
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
