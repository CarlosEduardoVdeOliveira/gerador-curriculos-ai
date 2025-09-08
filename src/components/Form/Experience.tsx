import { Briefcase, Check, Plus, Trash2, X } from "lucide-react";
import { useContext, useState } from "react";
import { ExperienceContext } from "../../context/ExperienceContext";
import Input from "./Input";
import { Textarea } from "./Textarea";

export function Experience() {
  const {
    enterprise,
    setEnterprise,
    position,
    setPosition,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    descriptionActives,
    setDescriptionActives,
    experiences,
    setExperiences,
  } = useContext(ExperienceContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const isAddDisabled = !enterprise || !position || !startDate;

  function addExperience() {
    if (isAddDisabled) return;

    const newExperience = {
      id: crypto.randomUUID(),
      enterprise,
      position,
      startDate,
      endDate,
      descriptionActives,
    };

    setExperiences((prev) => [...prev, newExperience]);
    clearForm();
    setIsFormOpen(false);
  }

  function removeExperience(id: string) {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  }

  function clearForm() {
    setEnterprise("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setDescriptionActives("");
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <Briefcase size={24} /> Experiência Profissional
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Adicione suas experiências de trabalho mais relevantes
        </p>
      </div>

      <button
        onClick={() => setIsFormOpen((prev) => !prev)}
        className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-500 transition-colors flex items-center justify-center gap-2"
      >
        <Plus size={24} />{" "}
        {isFormOpen ? "Fechar Formulário" : "Adicionar Experiência"}
      </button>

      {experiences.length === 0 && !isFormOpen && (
        <div className="text-center py-8 text-gray-400">
          <Briefcase size={32} className="mx-auto mb-2" />
          <p>Nenhuma experiência adicionada ainda</p>
          <p className="text-sm">Clique no botão acima para adicionar</p>
        </div>
      )}

      {isFormOpen && (
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={enterprise}
              id="enterprise"
              label="Empresa *"
              placeholder="Nome da empresa"
              type="text"
              onChange={setEnterprise}
            />
            <Input
              label="Cargo *"
              placeholder="Seu cargo na empresa"
              type="text"
              value={position}
              id="position"
              onChange={setPosition}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="month"
              value={startDate}
              id="startDate"
              label="Data de Início"
              placeholder=""
              onChange={setStartDate}
            />
            <Input
              type="month"
              value={endDate}
              id="endDate"
              label="Data de Fim"
              placeholder=""
              onChange={setEndDate}
            />
          </div>

          <div>
            <Textarea
              value={descriptionActives}
              onChange={setDescriptionActives}
              label="Resumo Profissional"
              maxLength={500}
              placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
              showIAButton={true}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              disabled={isAddDisabled}
              onClick={addExperience}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Check /> Adicionar
            </button>
            <button
              onClick={() => {
                clearForm();
                setIsFormOpen(false);
              }}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2"
            >
              <X /> Cancelar
            </button>
          </div>
        </div>
      )}

      {experiences.length > 0 && (
        <div className="space-y-4 mt-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-gray-200 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {exp.enterprise}
                  </h4>
                  <p className="text-gray-600 font-medium">{exp.position}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  title="Remover experiência"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {exp.descriptionActives}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
