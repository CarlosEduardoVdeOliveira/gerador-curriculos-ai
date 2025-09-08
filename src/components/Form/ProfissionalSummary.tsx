import { useContext } from "react";
import { PersonalInfoContext } from "../../context/PersonalInfoContext";
import { Textarea } from "./Textarea";

export function ProfissionalSummary() {
  const { profissionalSummaryValue, setProfissionalSummaryValue } =
    useContext(PersonalInfoContext);

  return (
    <div>
      <Textarea
        value={profissionalSummaryValue}
        onChange={setProfissionalSummaryValue}
        label="Resumo Profissional"
        maxLength={300}
        placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
        showIAButton={true}
      />
      <p className="text-xs text-gray-500 mt-1">
        Este resumo aparecerá no topo do seu currículo
      </p>
    </div>
  );
}
