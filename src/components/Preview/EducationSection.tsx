import { useContext } from "react";
import { EducationContext } from "../../context/EducationContext";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  const { education } = useContext(EducationContext);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
        <GraduationCap className="h-4 w-4 lg:h-5 lg:w-5" /> Escolaridade
      </h2>

      {education.length === 0 ? (
        <p className="text-gray-400 italic bg-gray-50 p-4 rounded-lg text-center">
          Suas formações aparecerão aqui conforme você adiciona...
        </p>
      ) : (
        <div className="space-y-3">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <p className="font-medium">{edu.course}</p>
              <p className="text-sm text-gray-600">
                {edu.institution} ({edu.startDate} - {edu.endDate || "Atual"})
              </p>
              <p className="text-xs text-gray-500">{edu.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
