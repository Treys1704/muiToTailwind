import Editor from '@monaco-editor/react';
import CopyButton from './CopyButton';
import { convertMuiToTailwind } from '../utils/claudeApi';
import extractContentWithinBackticks from '../utils/extractContent';
import { useState } from 'react';
import { toast } from 'sonner';

interface CodeConverterProps {
    inputCode: string,
    outputCode: any,
    onConvert: (value: any) => void
    onInputChange: (value: any) => void
  }

function CodeConverter({inputCode, outputCode, onConvert, onInputChange }: CodeConverterProps) {
    const [loading, setLoading] = useState(false);

    // Fonction pour gérer la conversion
  const handleConvert = async (value: string) => {
    // Appel à l'API Claude pour convertir le code
    setLoading(true);
    
    try {
        const response = await convertMuiToTailwind(value);
        const responseExtracted = extractContentWithinBackticks(response);
        onConvert(responseExtracted);
        toast.success("Code converted successfully !");
    } catch (error) {
        toast.error("An error occurred while converting the code: " + error);
    } finally {
        setLoading(false);
    }
  };

    const handleInputChange = (value: any) => {
        onInputChange(value);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-blue-400 text-xl">Material UI Input</h2>
                    <CopyButton text={inputCode}/>
                </div>
                <Editor
                    height="500px"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    value={inputCode}
                    onChange={handleInputChange}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                    }}
                />
                <button disabled={loading} onClick={ () => handleConvert(inputCode)} className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>{loading ? 'Loading...' : 'Convert' }</button>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-blue-400 text-xl">Tailwind CSS Output</h2>
                    <CopyButton text={outputCode}/>
                </div>
                <Editor
                    height="500px"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    value={outputCode}
                    options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        fontSize: 14,
                    }}
                />
            </div>
        </div>
    );
}

export default CodeConverter;