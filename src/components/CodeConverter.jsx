import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { componentMappings } from '../utils/componentMappings';
import { htmlMappings } from '../utils/htmlMappings';
import { handleDynamicStyles } from '../utils/dynamicStyles';
import CopyButton from './CopyButton';
function CodeConverter({inputCode, outputCode, onConvert, onInputChange }) {
    //const [inputCode, setInputCode] = useState('');
    //const [outputCode, setOutputCode] = useState('');

    const parseSxContent = (sxContent) => {
        try {
            // Assure que le contenu est entouré d'accolades pour un JSON valide
            const parsedContent = JSON.parse(`{${sxContent}}`);
            return parsedContent;
        } catch (error) {
            console.error("Erreur lors de l'analyse du JSON :", error);
            return {}; // Retourne un objet vide en cas d'erreur pour éviter l'échec
        }
    };

    const convertMUItoTailwind = (muiCode) => {
        let convertedCode = muiCode;

        Object.entries(componentMappings).forEach(([component, mappings]) => {
            const htmlElement = htmlMappings[component] || component.toLowerCase();
            const componentRegex = new RegExp(`<${component}(\\s|>)`, 'g');
            convertedCode = convertedCode.replace(componentRegex, `<${htmlElement} `);

            Object.entries(mappings).forEach(([prop, values]) => {
                Object.entries(values).forEach(([value, tailwindClass]) => {
                    const propRegex = new RegExp(`\\b${prop}="${value}"`, 'g');
                    convertedCode = convertedCode.replace(propRegex, `class="${tailwindClass}"`);
                });
            });

            const dynamicStyleRegex = new RegExp(`\\s?sx=\\{\\{([\\s\\S]*?)\\}\\}`, 'g');
            convertedCode = convertedCode.replace(dynamicStyleRegex, (_, sxContent) => {
                const parsedSx = parseSxContent(sxContent);
                const dynamicStyles = handleDynamicStyles({
                    sx: parsedSx,
                    responsive: parsedSx.responsive || null,
                    hover: parsedSx.hover || null,
                    active: parsedSx.active || null,
                    focus: parsedSx.focus || null,
                });
                return ` class="${dynamicStyles}"`;
            });

            const closingRegex = new RegExp(`</${component}>`, 'g');
            convertedCode = convertedCode.replace(closingRegex, `</${htmlElement}>`);
        });

        return convertedCode;
    };

    // const convertMUItoTailwind = (muiCode) => {
    //     let convertedCode = muiCode;

    //     Object.entries(componentMappings).forEach(([muiComponent, mappings]) => {
    //         // Transformation du nom de composant MUI en balise HTML correspondante
    //         const htmlElement = htmlMappings[muiComponent] || muiComponent.toLowerCase();
    //         const componentRegex = new RegExp(`<${muiComponent}\\s`, 'g');
    //         convertedCode = convertedCode.replace(componentRegex, `<${htmlElement} `);

    //         // Conversion des propriétés MUI en classes Tailwind
    //         Object.entries(mappings).forEach(([prop, values]) => {
    //             Object.entries(values).forEach(([value, tailwindClass]) => {
    //                 const propRegex = new RegExp(`\\s${prop}="${value}"`, 'g');
    //                 convertedCode = convertedCode.replace(propRegex, ` class="${tailwindClass}"`);
    //             });
    //         });

    //         // Gestion des styles dynamiques
    //         const dynamicStylesRegex = new RegExp(`<${muiComponent}([\\s\\S]*?)>`, 'g');
    //         convertedCode = convertedCode.replace(dynamicStylesRegex, (match, attributes) => {
    //             const dynamicClasses = handleDynamicStyles(attributes, muiComponent);
    //             return `<${htmlElement} class="${dynamicClasses}">`;
    //         });

    //         // Fermeture des balises de composant MUI
    //         const closingRegex = new RegExp(`</${muiComponent}>`, 'g');
    //         convertedCode = convertedCode.replace(closingRegex, `</${htmlElement}>`);
    //     });

    //     return convertedCode;
    // };

    const handleInputChange = (value) => {
        //setInputCode(value);
        onInputChange(value);
        const converted = convertMUItoTailwind(value);
        //setOutputCode(converted);
        onConvert(converted);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-xl">Material UI Input</h2>
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
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-xl">Tailwind CSS Output</h2>
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