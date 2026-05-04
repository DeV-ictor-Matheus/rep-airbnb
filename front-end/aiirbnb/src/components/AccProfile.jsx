import React from "react";

const AccProfile = () => {
  return (
  <div className="flex flex-col gap-2 items-center">
    <p>Logado como Victor (teste@teste.com)</p>
    <button className=" min-w-44 rounded-full bg-primary-400 text-white px-4 py-2 cursor-pointer transition">
    Logout
    </button>
  </div>
  );
};

export default AccProfile;
