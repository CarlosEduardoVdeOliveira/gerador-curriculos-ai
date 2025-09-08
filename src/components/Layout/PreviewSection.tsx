import { EducationSection } from "../Preview/EducationSection";
import { ExperienceSection } from "../Preview/ExperienceSection";
import { PersonalInfoPreview } from "../Preview/PersonalInfoSection";
import { SkillsSection } from "../Preview/SkillsSection";

export function PreviewSection() {
  return (
    <div className="w-full lg:w-1/2">
      <div className="bg-green-700 px-4 lg:px-6 py-4 rounded-t-xl">
        <h2 className="text-lg lg:text-xl font-semibold text-white">
          Preview do Currículo
        </h2>
        <p className="text-green-100 text-xs lg:text-sm mt-1">
          Visualização em tempo real
        </p>
      </div>

      <div className="p-4 lg:p-6 space-y-6 lg:space-y-8 shadow-lg overflow-y-auto overflow-x-hidden w-full max-h-[calc(100vh-280px)] rounded-b-xl bg-white">
        <PersonalInfoPreview />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />

        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-xs text-gray-500">
            Currículo gerado pelo Gerador de Currículos AI
          </p>
        </div>
      </div>
    </div>
  );
}
