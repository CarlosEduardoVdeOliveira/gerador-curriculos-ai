import { useState } from "react";

export function Container() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  
  return (
    <div className="h-full mt-4 flex justify-center gap-6 p-10">
      <div className="flex flex-col gap-2 w-[50%]">
        <input
          type="text"
          placeholder="Seu Nome Completo"
          className="border-[1px] p-0.5"
          onChange={(e) => setName(e.target.value.trim())}
        />
        <input
          type="text"
          placeholder="seu.email@exemplo.com"
          className="border-[1px] p-0.5"
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <div className="flex gap-2">
          <input
            type="text"
            className="border-[1px] p-0.5"
            onChange={(e) => setTelephone(e.target.value.trim())}
            placeholder="(11) 99999-9999"
          />
          <input
            type="text"
            className="border-[1px] p-0.5"
            onChange={(e) => setLinkedin(e.target.value.trim())}
            placeholder="linkedin.com/in/seuperfil"
          />
        </div>
      </div>
      <div className="w-[50%]">
        <p>{name}</p>
        <p>{email}</p>
        <p>{telephone}</p>
        <p>{linkedin}</p>
      </div>
    </div>
  );
}
