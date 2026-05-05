import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const AccProfile = () => {
  const { user, setUser } = useUserContext();
  const [redirect, setRedirect] = useState(false);

  const logout = async () => {
    try {
      const { data } = await axios.post("/users/logout");
      console.log(data);

      setUser(null);
      setRedirect(true);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  if (redirect) return <Navigate to="/" />;

  //Lógica para fazer a busca dos dados do cliente
  if (!user) return <></>;

  //Outra opção seria fazer: {user?.name} ({user?.email}) (Optional chaining)

  return (
    <div className="flex flex-col gap-2 items-center">
      <p>
        Logado como {user.name} ({user.email})
      </p>
      <button
        onClick={logout}
        className=" min-w-44 rounded-full bg-primary-400 text-white px-4 py-2 cursor-pointer transition"
      >
        Logout
      </button>
    </div>
  );
};

export default AccProfile;
