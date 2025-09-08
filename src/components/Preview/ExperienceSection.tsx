import { Briefcase } from "lucide-react";
import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceContext";
export function ExperienceSection() {
  const { experiences } = useContext(ExperienceContext);
  return (
    <div className="mb-6">
      <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Briefcase className="h-4 w-4 lg:h-5 lg:w-5" /> Experiência Profissional
      </h2>

      {experiences.length === 0 ? (
        <p className="text-gray-400 italic bg-gray-50 p-4 rounded-lg text-center flex flex-wrap text-sm lg:text-base">
          Suas experiências profissionais aparecerão aqui conforme você
          adiciona...
        </p>
      ) : (
        <div className="space-y-4">
          {experiences.map((experience) => (
            <div className="relative" key={experience.id}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-1"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {experience.enterprise}
                  </h3>
                  <p className="text-green-600 font-medium">
                    {experience.position}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {experience.descriptionActives}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
