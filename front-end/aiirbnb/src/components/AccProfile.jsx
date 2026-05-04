import React from "react";

const AccProfile = ({ user }) => {
  //Lógica para fazer a busca dos dados do cliente
  if (!user) return <></>;

  //Outra opção seria fazer: {user?.name} ({user?.email}) (Optional chaining)

  return (
    <div className="flex flex-col gap-2 items-center">
      <p>
        Logado como {user.name} ({user.email})
      </p>
      <button className=" min-w-44 rounded-full bg-primary-400 text-white px-4 py-2 cursor-pointer transition">
        Logout
      </button>
    </div>
  );
};

export default AccProfile;
