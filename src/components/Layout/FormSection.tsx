import { Briefcase, Plus, Settings, User, Wrench } from "lucide-react";
/* interface FormSectionProps {
  name: string;
  email: string;
  telephone: string;
  linkedin: string;
} */
export function FormSection() {
  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [linkedin, setLinkedin] = useState(""); */

  return (
    <div className="w-[100%]">
      <div className="bg-gray-600 px-6 py-4 rounded-t-xl">
        <h2 className="text-xl font-semibold text-white">
          Informações do Currículo
        </h2>
        <p className="text-green-100 text-sm mt-1">
          Preencha os dados e veja o preview em tempo real
        </p>
      </div>
      <div className="p-6 space-y-8 shadow-lg overflow-y-auto overflow-x-hidden w-[100%] max-h-[calc(100vh-280px)] rounded-b-xl">
        <div className="space-y-6">
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
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="professionalSummary"
                className="block text-sm font-medium text-gray-700"
              >
                Resumo Profissional
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">0/300</span>
                <div className="relative group">
                  <button
                    disabled={true}
                    className="px-2 py-1 text-xs bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed transition-colors flex items-center gap-2 "
                  >
                    <Settings size={14} />
                    Configurar IA
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Clique em "Configurar IA" no topo
                  </div>
                </div>
              </div>
            </div>
            <textarea
              id="professionalSummary"
              placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
              maxLength={300}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              Este resumo aparecerá no topo do seu currículo
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <Wrench />
              Habilidades
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Adicione suas principais competências técnicas
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  placeholder="Nome da habilidade (ex: React, Python, Figma)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  type="text"
                />
              </div>
              <div>
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option value="Básico">Básico</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>
              <button
                disabled={true}
                className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="text-center py-8 text-gray-400">
            <div className="mb-2 flex align-center justify-center">
              <Wrench size={32} className="" />
            </div>
            <p>Nenhuma habilidade adicionada ainda</p>
            <p className="text-sm">
              Adicione suas principais competências técnicas
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <Briefcase size={24} />
              Experiência Profissional
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Adicione suas experiências de trabalho mais relevantes
            </p>
          </div>
          <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-500 transition-colors flex items-center justify-center gap-2">
            <Plus size={24} />
            Adicionar Experiência
          </button>
          <div className="text-center py-8 text-gray-400">
            <div className="mb-2 flex justify-center align-center">
              <Briefcase size={32} />
            </div>
            <p>Nenhuma experiência adicionada ainda</p>
            <p className="text-sm">Clique no botão acima para adicionar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
