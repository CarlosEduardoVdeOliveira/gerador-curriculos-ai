import { Plus, Trash2, Wrench } from "lucide-react";
import { useContext, useState } from "react";
import { SkillsContext } from "../../context/SkillsContext";

const LEVELS = ["Básico", "Intermediário", "Avançado"] as const;

export function Skills() {
  const { skills, addSkill, removeSkill, updateSkill } =
    useContext(SkillsContext);

  const [name, setName] = useState("");
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("Básico");

  const levelColors: Record<string, string> = {
    Básico: "bg-yellow-200 text-yellow-800",
    Intermediário: "bg-orange-200 text-orange-800",
    Avançado: "bg-indigo-200 text-indigo-800",
  };

  function handleAdd() {
    const n = name.trim();
    if (!n) return;
    addSkill({ name: n, level });
    setName("");
    setLevel("Básico");
  }

  return (
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

      {/* Formulário de adicionar */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              value={name}
              placeholder="Nome da habilidade (ex: React, Python, Figma)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
              type="text"
              onChange={(e) => setName(e.target.value.trim())}
            />
          </div>

          <div>
            <select
              value={level}
              onChange={(e) =>
                setLevel(
                  e.target.value as "Básico" | "Intermediário" | "Avançado"
                )
              }
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
            >
              {LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          <button
            disabled={name.trim().length === 0}
            onClick={handleAdd}
            className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            title="Adicionar habilidade"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Lista de skills — cada item edita seu próprio estado via context.updateSkill */}
      <div className="text-center py-8 text-gray-400">
        {skills.length > 0 ? (
          <div className="space-y-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg"
              >
                <div className="flex items-center gap-3 flex-1">
                  <input
                    className="font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0 flex-1"
                    type="text"
                    value={skill.name}
                    onChange={(e) =>
                      updateSkill(skill.id, { name: e.target.value.trim() })
                    }
                  />

                  <select
                    value={skill.level}
                    onChange={(e) =>
                      updateSkill(skill.id, { level: e.target.value })
                    }
                    className="text-sm border-none bg-transparent focus:outline-none focus:ring-0"
                    aria-label={`Nível de ${skill.name}`}
                  >
                    {LEVELS.map((lvl) => (
                      <option key={lvl} value={lvl}>
                        {lvl}
                      </option>
                    ))}
                  </select>

                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      levelColors[skill.level] ?? "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <button
                  onClick={() => removeSkill(skill.id)}
                  className="ml-3 p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  title="Remover habilidade"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="mb-2 flex align-center justify-center">
              <Wrench size={32} />
            </div>
            <p>Nenhuma habilidade adicionada ainda</p>
            <p className="text-sm">
              Adicione suas principais competências técnicas
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
