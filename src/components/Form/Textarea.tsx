import { Settings } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { CharacterCounter } from "../UI/CharacterCounter";

// Props do componente
interface TextareaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
  showIAButton?: boolean;
}

export function Textarea({
  label = "Resumo Profissional",
  value,
  onChange,
  maxLength = 500,
  placeholder = "Descreva brevemente sua experiência e objetivos profissionais...",
  showIAButton = true,
}: TextareaProps) {
  const [count, setCount] = useState(value.length);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.length <= maxLength) {
      onChange(e.target.value);
      setCount(e.target.value.length);
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <label
            htmlFor="textarea"
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              <CharacterCounter current={count} max={maxLength} />
            </span>
            {showIAButton && (
              <div className="relative group">
                <button
                  disabled={true}
                  className="px-2 py-1 text-xs bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed transition-colors flex items-center gap-1"
                >
                  <Settings size={14} />
                  Configurar IA
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Clique em "Configurar IA" no topo
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <textarea
        id="textarea"
        placeholder={placeholder}
        maxLength={maxLength}
        rows={4}
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
      />
    </div>
  );
}
