import { useContext } from "react";
import { SkillsContext } from "../../context/SkillsContext";
import { Wrench } from "lucide-react";

export function SkillsSection() {
    const levelSymbols: Record<string, string> = {
    Básico: "●○○",
    Intermediário: "●●○",
    Avançado: "●●●",
  };

  const { skills } = useContext(SkillsContext);
  return (
    <div className="mb-6">
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Wrench className="h-4 w-4 lg:h-5 lg:w-5" /> Habilidades
          </h2>

          {skills.length === 0 ? (
            <p className="text-gray-400 italic bg-gray-50 p-4 rounded-lg text-center">
              Suas habilidades aparecerão aqui conforme você adiciona...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium text-gray-900">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{skill.level}</span>
                    <span className="text-green-600 font-mono text-sm">
                      {levelSymbols[skill.level] ?? "○○○"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
  );
}
