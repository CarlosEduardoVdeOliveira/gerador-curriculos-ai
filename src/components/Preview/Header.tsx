import { Bot, FileDown } from "lucide-react";

type HeaderProps = {
  onExportPDF: () => void;
};
export function Header({ onExportPDF }: Readonly<HeaderProps>) {
  return (
    <div>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Bot className="lucide lucide-bot h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
                Gerador de Currículos AI
              </h1>
              <p className="text-xs lg:text-sm text-gray-500 mt-1">
                Gerador Inteligente de Currículos com IA
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              {/* <div className="flex items-center gap-2 w-full sm:w-auto">
                {<div className="relative w-full sm:w-auto">
                  <Key className="lucide lucide-key absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    placeholder="Cole sua API Key"
                    value='{apiKey}'
                    onChange='{handleApiKeyChange}'
                    className={`
                      pl-10 pr-12 py-2 w-full sm:w-64 text-sm border rounded-lg transition-all duration-200 responsive-input
                      ${
                        isValidApiKey
                          ? "border-green-500 bg-green-50 focus:border-green-600 focus:ring-green-200"
                          : "border-gray-300 bg-white focus:border-green-500 focus:ring-green-200"
                      }
                      focus:outline-none focus:ring-2
                    `}
                    type="password"
                  />
                  {isLoaded && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                      {isValidApiKey ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : apiKey ? (
                        <X className="h-4 w-4 text-red-500" />
                      ) : null}
                      {apiKey && (
                        <button
                          onClick={handleClearApiKey}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                          title="Limpar API Key"
                        >
                          <X className="h-3 w-3 text-gray-500" />
                        </button>
                      )}
                    </div>
                  )}
                </div>}
              </div> */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={onExportPDF}
                  className="w-full sm:w-auto px-4 lg:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2 lg:gap-3 font-medium responsive-button"
                >
                  <FileDown className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="text-sm lg:text-base">Exportar PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
