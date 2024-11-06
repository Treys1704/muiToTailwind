// utils/propHandlers.js
import { convertSxToTailwind } from './dynamicStyles';

export function handleComplexProps(prop, component) {
    if (typeof prop === 'function') {
        return handleFunctionProp(prop, component);
    }

    if (typeof prop === 'object') {
        return handleObjectProp(prop, component);
    }

    return prop;
}

function handleFunctionProp(prop, component) {
    return (...args) => {
        const result = prop(...args);
        return convertToTailwind(result, component);
    };
}

function handleObjectProp(prop, component) {
    const converted = {};
    Object.entries(prop).forEach(([key, value]) => {
        converted[key] = convertToTailwind(value, component);
    });
    return converted;
}

export function convertToTailwind(value, component) {
    if (typeof value === 'object' && value !== null) {
        return convertSxToTailwind(value);
    }
    return value;
}