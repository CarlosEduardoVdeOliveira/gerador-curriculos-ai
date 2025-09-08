import { useContext } from "react";
import { PersonalInfoContext } from "../../context/PersonalInfoContext";
import { Mail, Phone, Linkedin } from "lucide-react";

export function PersonalInfoPreview() {
  const { name, email, phone, linkedin, profissionalSummaryValue } =
    useContext(PersonalInfoContext);
  return (
    <div className="max-w-2xl mx-auto bg-white border-b-4 border-green-600 pb-6 mb-6">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
        <span className="text-gray-400 italic">
          {name || "Seu Nome Completo"}
        </span>
      </h1>
      <div className="flex py-4 lg:py-6 w-full gap-2 lg:gap-3 flex-wrap">
        <span className="text-gray-400 italic flex items-center gap-1 text-xs lg:text-sm">
          <Mail className="h-3 w-3 lg:h-4 lg:w-4" />{" "}
          {email || "seu.email@exemplo.com"}
        </span>
        <span className="text-gray-400 italic flex items-center gap-1 text-xs lg:text-sm">
          <Phone className="h-3 w-3 lg:h-4 lg:w-4" />{" "}
          {phone || "(11) 99999-9999"}
        </span>
        {linkedin && (
          <span className="text-gray-400 italic flex items-center gap-1 text-xs lg:text-sm">
            <Linkedin className="h-3 w-3 lg:h-4 lg:w-4" /> {linkedin}
          </span>
        )}
      </div>
      <div className="mt-4 text-gray-400 italic flex flex-wrap whitespace-pre-wrap text-sm lg:text-base">
        {profissionalSummaryValue ||
          "Seu resumo profissional aparecerá aqui..."}
      </div>
    </div>
  );
}
