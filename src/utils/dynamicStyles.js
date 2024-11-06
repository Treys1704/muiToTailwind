const breakpoints = {
    xs: 'sm',
    sm: 'md',
    md: 'lg',
    lg: 'xl',
    xl: '2xl',
};

export function handleDynamicStyles({ sx, responsive, hover, active, focus }) {
    let classes = [];

    // Gestion des styles de base avec sx
    if (sx) {
        classes = classes.concat(convertSxToTailwind(sx));
    }

    // Gestion des styles réactifs
    if (responsive) {
        classes = classes.concat(handleResponsiveStyles(responsive));
    }

    // Gestion des styles dynamiques : hover, active, et focus
    if (hover) {
        classes.push(`hover:${convertSxToTailwind(hover)}`);
    }
    if (active) {
        classes.push(`active:${convertSxToTailwind(active)}`);
    }
    if (focus) {
        classes.push(`focus:${convertSxToTailwind(focus)}`);
    }

    return classes.join(' ');
}

// export function handleDynamicStyles(props, component) {
//     let classes = [];

//     if (props.sx) {
//         classes = classes.concat(convertSxToTailwind(props.sx));
//     }

//     if (props.responsive) {
//         classes = classes.concat(handleResponsiveStyles(props.responsive));
//     }

//     if (props.hover) {
//         classes.push(`hover:${convertSxToTailwind(props.hover)}`);
//     }

//     if (props.active) {
//         classes.push(`active:${convertSxToTailwind(props.active)}`);
//     }

//     if (props.focus) {
//         classes.push(`focus:${convertSxToTailwind(props.focus)}`);
//     }

//     return classes.join(' ');
// }

export function handleResponsiveStyles(responsiveProps) {
    const classes = [];

    Object.entries(responsiveProps).forEach(([breakpoint, styles]) => {
        const tailwindBreakpoint = breakpoints[breakpoint];
        if (tailwindBreakpoint) {
            const convertedStyles = convertSxToTailwind(styles);
            classes.push(`${tailwindBreakpoint}:${convertedStyles}`);
        }
    });

    return classes;
}

export function convertSxToTailwind(sx) {
    if (typeof sx === 'string') return sx;

    const classes = [];

    Object.entries(sx).forEach(([property, value]) => {
        const convertedClass = convertPropertyToTailwind(property, value);
        if (convertedClass) classes.push(convertedClass);
    });

    return classes.join(' ');
}

export function convertPropertyToTailwind(property, value) {
    const propertyMap = {
        backgroundColor: (val) => `bg-${val === 'blue' ? 'blue-200' : val}`,
        mt: (val) => `mt-${val}`,
        mb: (val) => `mb-${val}`,
        ml: (val) => `ml-${val}`,
        mr: (val) => `mr-${val}`,
        mx: (val) => `mx-${val}`,
        my: (val) => `my-${val}`,
        color: 'text',
        padding: 'p',
        paddingTop: 'pt',
        paddingBottom: 'pb',
        paddingLeft: 'pl',
        paddingRight: 'pr',
        margin: 'm',
        marginTop: 'mt',
        marginBottom: 'mb',
        marginLeft: 'ml',
        marginRight: 'mr',
        width: 'w',
        minWidth: 'min-w',
        maxWidth: 'max-w',
        height: 'h',
        minHeight: 'min-h',
        maxHeight: 'max-h',
        display: '',
        flexDirection: 'flex',
        alignItems: 'items',
        justifyContent: 'justify',
        gap: 'gap',
        borderRadius: 'rounded',
        border: 'border',
        borderTop: 'border-t',
        borderBottom: 'border-b',
        borderLeft: 'border-l',
        borderRight: 'border-r',
        fontSize: 'text',
        fontWeight: 'font',
        lineHeight: 'leading',
        letterSpacing: 'tracking',
        textAlign: 'text',
        opacity: 'opacity',
        overflow: 'overflow',
        overflowX: 'overflow-x',
        overflowY: 'overflow-y',
        position: 'absolute',
        zIndex: 'z',
        top: 'top',
        bottom: 'bottom',
        left: 'left',
        right: 'right',
        boxShadow: 'shadow',
        cursor: 'cursor',
        transition: 'transition',
        transform: 'transform',
        // Ajoutez d'autres propriétés si nécessaire
    };

    const prefix = propertyMap[property];
    if (!prefix) return null;

    // Gestion des valeurs numériques avec unités en Tailwind
    if (typeof value === 'number') {
        return `${prefix}-${value}`;
    }
    
    if (typeof value === 'string') {
        // Conversion des valeurs de taille avec unités
        if (value.endsWith('px')) {
            const numericValue = parseInt(value.slice(0, -2), 10);
            return `${prefix}-${numericValue}`;
        }
        if (value.endsWith('%')) {
            const numericValue = parseInt(value.slice(0, -1), 10);
            return `${prefix}-${numericValue === 100 ? 'full' : `[${numericValue}%]`}`;
        }

        // Conversion des valeurs spécifiques pour certaines propriétés
        if (property === 'fontWeight') {
            return `${prefix}-${value}`;
        }
        
        if (property === 'textAlign') {
            return `${prefix}-${value}`;
        }
        
        // Gestion des valeurs de couleur
        if (property.includes('color')) {
            return `${prefix}-${value.replace('#', '')}`;  // Ex: bg-red-500
        }
    }

    return `${prefix}-${value}`;
}

// export function convertPropertyToTailwind(property, value) {
//     const propertyMap = {
//         backgroundColor: 'bg',
//         color: 'text',
//         padding: 'p',
//         margin: 'm',
//         width: 'w',
//         height: 'h',
//         display: '',
//         flexDirection: 'flex',
//         alignItems: 'items',
//         justifyContent: 'justify',
//         gap: 'gap',
//         borderRadius: 'rounded',
//         // Ajoutez d'autres propriétés selon vos besoins
//     };

//     const prefix = propertyMap[property];
//     if (!prefix) return null;

//     // Conversion des valeurs numériques en classes Tailwind
//     if (typeof value === 'number') {
//         return `${prefix}-${value}`;
//     }

//     // Conversion des valeurs de couleur
//     if (property.includes('color')) {
//         return `${prefix}-${value}`;
//     }

//     return `${prefix}-${value}`;
// }