import { User } from "lucide-react";
import { useContext } from "react";
import { PersonalInfoContext } from "../../context/PersonalInfoContext";

export function PersonalInfo() {
  const { setName, setEmail, setPhone, setLinkedin } =
    useContext(PersonalInfoContext);

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
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Nome Completo *
        </label>
        <input
          id="name"
          placeholder="Seu nome completo"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email *
        </label>
        <input
          id="email"
          placeholder="seu.email@exemplo.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Telefone *
          </label>
          <input
            id="phone"
            placeholder="(11) 99999-9999"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            LinkedIn
          </label>
          <input
            id="linkedin"
            placeholder="linkedin.com/in/seuperfil"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            type="url"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
