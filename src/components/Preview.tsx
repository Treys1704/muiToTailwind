import { motion } from "framer-motion";
import { extractReturnContent } from "../utils/extractContent";

function Preview({ code }: any) {
  // Fonction pour nettoyer et préparer le code pour la prévisualisation
  const prepareCodeForPreview = (code: any) => {
    if (!code) return "";

    // Convertir les attributs JSX en HTML
    let preparedCode = code
      .replace(/className=/g, "class=")
      .replace(/\{true\}/g, "")
      .replace(/\{false\}/g, "");

    // Envelopper dans un div si nécessaire
    if (!preparedCode.trim().startsWith("<div")) {
      preparedCode = `<div class="p-4 m-4">${extractReturnContent(preparedCode)}</div>`;
    }

    return extractReturnContent(preparedCode);
  };

  const preparedCode = prepareCodeForPreview(code);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      {/* Prévisualisation en direct */}
      <div className="bg-slate-200 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Live Preview</h3>
        </div>
        <div className="p-3 text-black bg-transparent min-h-[200px]">
          {code ? (
            <div
              className="preview-content"
              dangerouslySetInnerHTML={{ __html: preparedCode }}
            />
          ) : (
            <div className="text-gray-500 text-center">
              Convert some code to see the preview
            </div>
          )}
        </div>
      </div>

      {/* Code HTML généré */}
      {code && (
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-700 border-b border-gray-600">
            <h3 className="text-lg font-medium text-white">Generated HTML</h3>
          </div>
          <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
            {preparedCode}
          </pre>
        </div>
      )}
    </motion.div>
  );
}

export default Preview;
