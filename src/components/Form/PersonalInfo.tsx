import { User } from "lucide-react";
import { useContext } from "react";
import { PersonalInfoContext } from "../../context/PersonalInfoContext";
import Input from "./Input";

export function PersonalInfo() {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    linkedin,
    setLinkedin,
  } = useContext(PersonalInfoContext);

  return (
    <>
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <User /> Dados Pessoais
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Informações básicas para contato
        </p>
      </div>
      <Input
        id="name"
        label="Nome Completo *"
        placeholder="Seu nome completo"
        type="text"
        value={name}
        onChange={setName}
      />
      <Input
        id="email"
        label=" Email *"
        placeholder="seu.email@exemplo.com"
        type="text"
        value={email}
        onChange={setEmail}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="phone"
          label="Telefone *"
          placeholder="(11) 99999-9999"
          type="text"
          value={phone}
          onChange={setPhone}
        />
        <Input
          id="linkedin"
          label="LinkedIn"
          placeholder="linkedin.com/in/seuperfil"
          type="text"
          value={linkedin}
          onChange={setLinkedin}
        />
      </div>
    </>
  );
}
