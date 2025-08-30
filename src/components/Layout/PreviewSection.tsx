import { Briefcase, Linkedin, Mail, Phone, Wrench } from "lucide-react";

export function PreviewSection() {
  return (
    <div className="w-[100%]">
      <div className="bg-green-700 px-6 py-4 rounded-t-xl">
        <h2 className="text-xl font-semibold text-white">
          Preview do Currículo
        </h2>
        <p className="text-green-100 text-sm mt-1">
          Visualização em tempo real
        </p>
      </div>
      <div className="p-6 space-y-8 shadow-lg overflow-y-auto overflow-x-hidden w-[100%] max-h-[calc(100vh-280px)] rounded-b-xl">
        <div className="max-w-2xl mx-auto bg-white border-b-4 border-gree pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            <span className="text-gray-400 italic">Seu Nome Completo</span>
          </h1>
          <div className="flex py-6 w-[100%] gap-3 flex-wrap">
            <span className="text-gray-400 italic flex items-center gap-1 text-[14px]">
              <Mail /> seu.email@exemplo.com
            </span>
            <span className="text-gray-400 italic flex items-center gap-1 text-[14px]">
              <Phone /> (11) 99999-9999
            </span>
            <span className="text-gray-400 italic flex items-center gap-1 text-[14px]">
              <Linkedin /> linkedin.com/in/linkedinUser/
            </span>
          </div>
          <div className="mt-4 text-gray-400 italic flex flex-wrap">
            Seu resumo profissional aparecerá aqui...
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Wrench /> Habilidades
          </h2>
          <p className="text-gray-400 italic bg-gray-50 p-4 rounded-lg text-center flex flex-wrap">
            Suas habilidades aparecerão aqui conforme você adiciona...
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Briefcase /> Experiência Profissional
          </h2>
          <p className="text-gray-400 italic bg-gray-50 p-4 rounded-lg text-center flex flex-wrap">
            Suas experiências profissionais aparecerão aqui conforme você
            adiciona...
          </p>
        </div>
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-xs text-gray-500">
            Currículo gerado pelo Gerador de Currículos AI
          </p>
        </div>
      </div>
    </div>
  );
}
