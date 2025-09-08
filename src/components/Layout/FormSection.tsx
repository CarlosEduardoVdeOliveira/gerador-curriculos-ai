import { EducationForm } from "../Form/Education";
import { Experience } from "../Form/Experience";
import { PersonalInfo } from "../Form/PersonalInfo";
import { ProfissionalSummary } from "../Form/ProfissionalSummary";
import { Skills } from "../Form/Skills";

export function FormSection() {
  return (
    <div className="w-full lg:w-1/2">
      <div className="bg-gray-600 px-4 lg:px-6 py-4 rounded-t-xl">
        <h2 className="text-lg lg:text-xl font-semibold text-white">
          Informações do Currículo
        </h2>
        <p className="text-green-100 text-xs lg:text-sm mt-1">
          Preencha os dados e veja o preview em tempo real
        </p>
      </div>
      <div className="p-4 lg:p-6 space-y-6 lg:space-y-8 shadow-lg overflow-y-auto overflow-x-hidden w-full max-h-[calc(100vh-280px)] rounded-b-xl bg-white">
        <div className="space-y-6">
          <PersonalInfo />
          <ProfissionalSummary />
        </div>
        <EducationForm />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}
