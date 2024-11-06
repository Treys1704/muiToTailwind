import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import { componentMappings } from './componentMappings';
import { handleDynamicStyles } from './dynamicStyles';
import { handleComplexProps } from './propHandlers';

export async function convertCode(materialUICode) {
    try {
        const ast = parse(materialUICode, {
            sourceType: 'module',
            plugins: ['jsx'],
        });

        traverse(ast, {
            JSXElement(path) {
                const element = path.node.openingElement;
                const componentName = element.name.name;

                if (componentMappings[componentName]) {
                    const classes = [];
                    const dynamicProps = {};

                    // Traitement des props statiques
                    element.attributes.forEach(attr => {
                        if (attr.type === 'JSXAttribute') {
                            const propName = attr.name.name;
                            const mapping = componentMappings[componentName][propName];

                            if (mapping) {
                                if (attr.value.type === 'JSXExpressionContainer') {
                                    // Gestion des props dynamiques
                                    dynamicProps[propName] = handleComplexProps(
                                        attr.value.expression,
                                        componentName
                                    );
                                } else {
                                    classes.push(mapping[attr.value.value] || '');
                                }
                            }
                        }
                    });

                    // Ajout des styles dynamiques
                    const dynamicStyles = handleDynamicStyles(dynamicProps, componentName);
                    if (dynamicStyles) {
                        classes.push(dynamicStyles);
                    }

                    // Mise à jour des attributs
                    element.attributes = [
                        {
                            type: 'JSXAttribute',
                            name: { type: 'JSXIdentifier', name: 'className' },
                            value: { type: 'StringLiteral', value: classes.join(' ') },
                        },
                        ...Object.entries(dynamicProps).map(([key, value]) => ({
                            type: 'JSXAttribute',
                            name: { type: 'JSXIdentifier', name: key },
                            value: { type: 'JSXExpressionContainer', expression: value },
                        })),
                    ];
                }
            },
        });

        return generate(ast, {
            retainLines: true,
            compact: false,
        }).code;
    } catch (error) {
        throw new Error(`Conversion error: ${error.message}`);
    }
}