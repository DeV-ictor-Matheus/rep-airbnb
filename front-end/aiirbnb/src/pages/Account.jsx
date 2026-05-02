import React from "react";
import { useParams } from "react-router-dom";

const Account = () => {
  const { subpage } = useParams();

  const buttonClass = (button) => {
    let finalClass =
      "rounded-full hover:bg-primary-400 hover:text-white px-4 py-2 cursor-pointer transition";
    if (button === subpage) finalClass += " bg-primary-400 text-white";

    return finalClass;
  };
  return (
    <section className="p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center">
        <div className="flex gap-2">
          <button className={buttonClass("profile")}>Perfil</button>
          <button className={buttonClass("bookings")}>Reservas</button>
          <button className={buttonClass("places")}>Lugares</button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p>Logado como Victor (teste@teste.com)</p>
          <button className=" min-w-44 rounded-full bg-primary-400 text-white px-4 py-2 cursor-pointer transition">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Account;
