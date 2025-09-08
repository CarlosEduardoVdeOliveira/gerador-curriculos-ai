import { AlertCircle, Check, Copy, Trash2 } from "lucide-react";
import { useState } from "react";

interface ActionButtonsProps {
  onClear: () => void;
  showQuestion?: boolean;
  response?: string;
}

export function ActionButtons({
  onClear,
  showQuestion,
  response,
}: Readonly<ActionButtonsProps>) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleClear = () => {
    if (showConfirm) {
      onClear();
      setShowConfirm(false);
    } else {
      setShowConfirm(true);
      setTimeout(() => setShowConfirm(false), 3000);
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        const textToCopy = response || "";
        await navigator.clipboard.writeText(textToCopy);
        setCopyStatus("success");
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = response || "";
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        setCopyStatus("success");
      }
    } catch (err) {
      console.error("Erro ao copiar:", err);
      setCopyStatus("error");
    }

    setTimeout(() => setCopyStatus("idle"), 2000);
  };

  if (!showQuestion && !response) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 animate-fadeIn">
      <button
        onClick={handleClear}
        className={`
          px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 responsive-button
          ${
            showConfirm
              ? "bg-red-600 text-white hover:bg-red-700 shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
          }
          hover:shadow-md transform hover:scale-105 active:scale-95
        `}
        title={
          showConfirm ? "Clique novamente para confirmar" : "Limpar resposta"
        }
      >
        {showConfirm ? (
          <>
            <AlertCircle size={16} />
            <span className="responsive-text">Confirmar Limpeza</span>
          </>
        ) : (
          <>
            <Trash2 size={16} />
            <span className="responsive-text">Limpar</span>
          </>
        )}
      </button>

      {response && (
        <button
          onClick={handleCopy}
          disabled={copyStatus === "success"}
          className={`
            px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 responsive-button
            ${
              copyStatus === "success"
                ? "bg-green-600 text-white"
                : copyStatus === "error"
                ? "bg-red-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }
            hover:shadow-md transform hover:scale-105 active:scale-95 disabled:transform-none
          `}
          title="Copiar resposta"
        >
          {copyStatus === "success" ? (
            <>
              <Check size={16} />
              <span className="responsive-text">Copiado!</span>
            </>
          ) : copyStatus === "error" ? (
            <>
              <AlertCircle size={16} />
              <span className="responsive-text">Erro</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="responsive-text">Copiar</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}
