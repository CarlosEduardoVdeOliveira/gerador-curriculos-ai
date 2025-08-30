import { Bot, FileDown, Key } from "lucide-react";

export function PersonalHeader() {
  return (
    <div>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Bot className="lucide lucide-bot h-8 w-8 text-green-600" />
                Gerador de Currículos AI
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Gerador Inteligente de Currículos com IA
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Key className="lucide lucide-key absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    placeholder="Cole sua API Key"
                    className="
                      pl-10 pr-10 py-2 w-64 text-sm border rounded-lg transition-all duration-200
                      border-gray-300 bg-white focus:border-green-500 focus:ring-green-200
                      focus:outline-none focus:ring-2
                    "
                    type="password"
                  />
                </div>
              </div>
              <div className="relative">
                <button className=" px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 flex items-center gap-3 font-medium">
                  <FileDown className="h-5 w-5" />
                  <span>Exportar PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
