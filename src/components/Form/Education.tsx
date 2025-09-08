import { GraduationCap, Plus, Trash2 } from "lucide-react";
import { useContext, useState } from "react";
import { EducationContext } from "../../context/EducationContext";
import Input from "./Input";

const STATUS_OPTIONS = [
  "Ensino Médio Completo",
  "Ensino Médio Incompleto",
  "Técnico Completo",
  "Técnico Incompleto",
  "Superior Completo",
  "Superior Incompleto",
] as const;

export function EducationForm() {
  const { education, addEducation, removeEducation } =
    useContext(EducationContext);

  const [course, setCourse] = useState("");
  const [institution, setInstitution] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] =
    useState<(typeof STATUS_OPTIONS)[number]>("Superior Completo");

  function handleAdd() {
    if (!course.trim() || !institution.trim()) return;

    addEducation({
      course: course.trim(),
      institution: institution.trim(),
      startDate,
      endDate,
      status,
    });

    setCourse("");
    setInstitution("");
    setStartDate("");
    setEndDate("");
    setStatus("Superior Completo");
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <GraduationCap /> Escolaridade
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Adicione suas formações acadêmicas
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <Input
          label=""
          type="text"
          id="course"
          value={course}
          onChange={setCourse}
          placeholder="Curso (ex: Ciência da Computação)"
        />
        <Input
          id="institution"
          label=""
          type="text"
          value={institution}
          onChange={setInstitution}
          placeholder="Instituição (ex: USP)"
          /* className="w-full px-3 py-2 border rounded-md" */
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label=""
            placeholder=""
            id="startDate"
            type="month"
            value={startDate}
            onChange={setStartDate}
          />
          <Input
            label=""
            placeholder=""
            id="endDate"
            type="month"
            value={endDate}
            onChange={setEndDate}
          />
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as typeof status)}
          className="w-full px-3 py-2 border rounded-md"
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          disabled={!course.trim() || !institution.trim()}
          className="flex items-center cursor-pointer justify-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-md w-full"
        >
          <Plus size={16} /> Adicionar
        </button>
      </div>

      {education.length > 0 && (
        <div className="space-y-3">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="flex justify-between items-center p-3 bg-white border rounded-lg"
            >
              <div className="flex flex-col">
                <span className="font-medium">{edu.course}</span>
                <span className="text-sm text-gray-500">
                  {edu.institution} ({edu.startDate} - {edu.endDate || "Atual"})
                </span>
                <span className="text-xs text-gray-400">{edu.status}</span>
              </div>
              <button
                onClick={() => removeEducation(edu.id)}
                className="text-red-500 hover:bg-red-50 p-2 rounded-md"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
