export const componentMappings = {
    // Composants de base
    Button: {
        variant: {
            contained: 'bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-sm',
            outlined: 'border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-md',
            text: 'text-blue-500 hover:bg-blue-50 font-medium',
        },
        color: {
            primary: 'bg-blue-500 hover:bg-blue-600 text-white',
            secondary: 'bg-purple-500 hover:bg-purple-600 text-white',
            error: 'bg-red-500 hover:bg-red-600 text-white',
            warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
            info: 'bg-sky-500 hover:bg-sky-600 text-white',
            success: 'bg-green-500 hover:bg-green-600 text-white',
        },
        size: {
            small: 'px-2.5 py-1.5 text-sm',
            medium: 'px-4 py-2',
            large: 'px-6 py-3 text-lg',
        },
        disabled: 'opacity-50 cursor-not-allowed',
        fullWidth: 'w-full',
    },

    // Typographie
    Typography: {
        variant: {
            h1: 'text-5xl font-bold tracking-tight',
            h2: 'text-4xl font-bold tracking-tight',
            h3: 'text-3xl font-bold',
            h4: 'text-2xl font-bold',
            h5: 'text-xl font-bold',
            h6: 'text-lg font-bold',
            subtitle1: 'text-lg font-medium',
            subtitle2: 'text-base font-medium',
            body1: 'text-base',
            body2: 'text-sm',
            caption: 'text-xs',
            overline: 'text-xs uppercase tracking-wider',
        },
        color: {
            primary: 'text-gray-900',
            secondary: 'text-gray-600',
            error: 'text-red-500',
            warning: 'text-yellow-500',
            info: 'text-blue-500',
            success: 'text-green-500',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
            justify: 'text-justify',
        },
    },

    // Conteneurs
    Paper: {
        variant: {
            elevation: 'bg-white shadow',
            outlined: 'border border-gray-200 bg-white',
        },
        elevation: {
            0: '',
            1: 'shadow-sm',
            2: 'shadow',
            3: 'shadow-md',
            4: 'shadow-lg',
            5: 'shadow-xl',
            6: 'shadow-2xl',
        },
    },

    Box: {
        display: {
            flex: 'flex',
            block: 'block',
            inlineBlock: 'inline-block',
            grid: 'grid',
            inlineFlex: 'inline-flex',
        },
        flexDirection: {
            row: 'flex-row',
            column: 'flex-col',
            rowReverse: 'flex-row-reverse',
            columnReverse: 'flex-col-reverse',
        },
        justifyContent: {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            around: 'justify-around',
            evenly: 'justify-evenly',
        },
        alignItems: {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch',
            baseline: 'items-baseline',
        },
        padding: {
            none: 'p-0',
            small: 'p-2',
            medium: 'p-4',
            large: 'p-6',
            xl: 'p-8',
        },
        margin: {
            none: 'm-0',
            small: 'm-2',
            medium: 'm-4',
            large: 'm-6',
            xl: 'm-8',
        },
    },

    Grid: {
        container: 'grid gap-4',
        item: 'p-2',
        spacing: {
            0: 'gap-0',
            1: 'gap-1',
            2: 'gap-2',
            3: 'gap-3',
            4: 'gap-4',
            5: 'gap-5',
            6: 'gap-6',
            8: 'gap-8',
            12: 'gap-12',
        },
        columns: {
            1: 'grid-cols-1',
            2: 'grid-cols-2',
            3: 'grid-cols-3',
            4: 'grid-cols-4',
            5: 'grid-cols-5',
            6: 'grid-cols-6',
            12: 'grid-cols-12',
        },
        alignItems: {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch',
        },
        justifyContent: {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            around: 'justify-around',
        },
    },

    Stack: {
        direction: {
            row: 'flex space-x-2',
            column: 'flex-col space-y-2',
            rowReverse: 'flex-row-reverse space-x-reverse',
            columnReverse: 'flex-col-reverse space-y-reverse',
        },
        spacing: {
            0: 'space-x-0 space-y-0',
            1: 'space-x-1 space-y-1',
            2: 'space-x-2 space-y-2',
            3: 'space-x-3 space-y-3',
            4: 'space-x-4 space-y-4',
            5: 'space-x-5 space-y-5',
            6: 'space-x-6 space-y-6',
            8: 'space-x-8 space-y-8',
            12: 'space-x-12 space-y-12',
        },
        alignItems: {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch',
        },
        justifyContent: {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            around: 'justify-around',
        },
        wrap: {
            nowrap: 'flex-nowrap',
            wrap: 'flex-wrap',
            wrapReverse: 'flex-wrap-reverse',
        },
    },

    // Grille et Layout
    Container: {
        maxWidth: {
            xs: 'max-w-xs',
            sm: 'max-w-sm',
            md: 'max-w-md',
            lg: 'max-w-lg',
            xl: 'max-w-xl',
        },
        fixed: 'mx-auto',
    },

    // Formulaires
    TextField: {
        variant: {
            outlined: 'border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            filled: 'bg-gray-100 border-b-2 border-gray-300 focus:border-blue-500',
            standard: 'border-b border-gray-300 focus:border-blue-500',
        },
        size: {
            small: 'px-2 py-1 text-sm',
            medium: 'px-3 py-2',
            large: 'px-4 py-3 text-lg',
        },
        fullWidth: 'w-full',
        error: {
            error: 'border-red-500 focus:border-red-500 focus:ring-red-500'},
        disabled: 'bg-gray-100 cursor-not-allowed',
    },

    // Cartes
    Card: {
        variant: {
            elevation: 'bg-white shadow rounded-lg',
            outlined: 'border border-gray-200 rounded-lg',
        },
    },

    CardContent: {
        default: 'p-4',
    },

    CardActions: {
        default: 'px-4 py-3 flex items-center',
        disableSpacing: 'space-x-2',
    },

    // Navigation
    AppBar: {
        position: {
            fixed: 'fixed top-0 left-0 right-0',
            absolute: 'absolute top-0 left-0 right-0',
            sticky: 'sticky top-0',
            static: 'relative',
            relative: 'relative',
        },
        color: {
            primary: 'bg-blue-500',
            secondary: 'bg-purple-500',
            transparent: 'bg-transparent',
        },
    },

    // Lists
    List: {
        default: 'divide-y divide-gray-200',
    },

    ListItem: {
        default: 'px-4 py-3',
        button: 'hover:bg-gray-50 cursor-pointer',
        selected: 'bg-blue-50',
    },

    // Feedback
    CircularProgress: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-purple-500',
            error: 'text-red-500',
            warning: 'text-yellow-500',
            info: 'text-sky-500',
            success: 'text-green-500',
        },
        size: {
            small: 'w-5 h-5',
            medium: 'w-9 h-9',
            large: 'w-12 h-12',
        },
    },

    // Surfaces
    Drawer: {
        variant: {
            permanent: 'fixed inset-y-0',
            persistent: 'fixed inset-y-0 transform transition-transform duration-300',
            temporary: 'fixed inset-y-0 transform transition-transform duration-300',
        },
        anchor: {
            left: 'left-0',
            right: 'right-0',
            top: 'top-0',
            bottom: 'bottom-0',
        },
    },

    // Data Display
    Chip: {
        variant: {
            filled: 'bg-gray-100 text-gray-800',
            outlined: 'border border-gray-300',
        },
        color: {
            primary: 'bg-blue-100 text-blue-800',
            secondary: 'bg-purple-100 text-purple-800',
            error: 'bg-red-100 text-red-800',
            warning: 'bg-yellow-100 text-yellow-800',
            info: 'bg-sky-100 text-sky-800',
            success: 'bg-green-100 text-green-800',
        },
        size: {
            small: 'px-2 py-0.5 text-xs',
            medium: 'px-3 py-1 text-sm',
        },
    },

    // Feedback
    Alert: {
        severity: {
            error: 'bg-red-50 text-red-700 border border-red-200',
            warning: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
            info: 'bg-blue-50 text-blue-700 border border-blue-200',
            success: 'bg-green-50 text-green-700 border border-green-200',
        },
        variant: {
            standard: 'rounded-lg p-4',
            outlined: 'border rounded-lg p-4',
            filled: 'text-white rounded-lg p-4',
        },
    },

    // Navigation
    Tabs: {
        default: 'border-b border-gray-200',
        indicator: 'bg-blue-500',
    },

    Tab: {
        default: 'px-4 py-2 text-sm font-medium',
        selected: 'text-blue-600 border-b-2 border-blue-500',
    },
// DataGrid
    DataGrid: {
        default: 'w-full border border-gray-200 rounded-lg overflow-hidden',
        density: {
            compact: 'text-sm',
            standard: 'text-base',
            comfortable: 'text-lg'
        },
        checkboxSelection: 'space-x-4',
        pagination: 'border-t border-gray-200',
        autoHeight: 'h-auto',
        loading: 'opacity-50',
        error: 'border-red-500',
        columnHeader: {
            default: 'bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
            sortable: 'cursor-pointer hover:bg-gray-100',
            sorted: 'bg-gray-100',
            filtered: 'bg-blue-50',
        },
        cell: {
            default: 'px-6 py-4 whitespace-nowrap',
            numeric: 'text-right',
            boolean: 'text-center',
            actions: 'text-right',
        },
        row: {
            default: 'hover:bg-gray-50',
            selected: 'bg-blue-50',
            hover: 'hover:bg-gray-50',
        },
    },

    // DatePicker
    DatePicker: {
        default: 'relative inline-block',
        variant: {
            standard: 'border-b border-gray-300',
            outlined: 'border border-gray-300 rounded-md',
            filled: 'bg-gray-100 rounded-t-md',
        },
        size: {
            small: 'p-2 text-sm',
            medium: 'p-3',
            large: 'p-4 text-lg',
        },
        error: 'border-red-500',
        disabled: 'bg-gray-100 cursor-not-allowed opacity-50',
        readOnly: 'bg-gray-50 cursor-not-allowed',
        fullWidth: 'w-full',
    },

    // TimePicker
    TimePicker: {
        default: 'relative inline-block',
        variant: {
            standard: 'border-b border-gray-300',
            outlined: 'border border-gray-300 rounded-md',
            filled: 'bg-gray-100 rounded-t-md',
        },
        size: {
            small: 'p-2 text-sm',
            medium: 'p-3',
            large: 'p-4 text-lg',
        },
        error: 'border-red-500',
        disabled: 'bg-gray-100 cursor-not-allowed opacity-50',
        readOnly: 'bg-gray-50 cursor-not-allowed',
        fullWidth: 'w-full',
    },

    // Autocomplete
    Autocomplete: {
        default: 'relative',
        variant: {
            standard: 'border-b border-gray-300',
            outlined: 'border border-gray-300 rounded-md',
            filled: 'bg-gray-100 rounded-t-md',
        },
        size: {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
        },
        fullWidth: 'w-full',
        disabled: 'opacity-50 cursor-not-allowed',
        loading: 'opacity-70',
        option: {
            default: 'px-4 py-2 hover:bg-gray-100 cursor-pointer',
            selected: 'bg-blue-50',
            focused: 'bg-gray-100',
        },
        listbox: 'max-h-60 overflow-auto bg-white shadow-lg rounded-md',
        popper: 'z-50',
    },

    // Rating
    Rating: {
        default: 'inline-flex',
        size: {
            small: 'gap-1',
            medium: 'gap-2',
            large: 'gap-3',
        },
        disabled: 'opacity-50 cursor-not-allowed',
        readOnly: 'pointer-events-none',
        icon: {
            filled: 'text-yellow-400',
            empty: 'text-gray-300',
            hover: 'text-yellow-300',
        },
    },

    // TransferList
    TransferList: {
        default: 'flex gap-4',
        list: {
            default: 'border border-gray-200 rounded-lg p-4 min-w-[200px]',
            header: 'font-medium mb-2',
            item: 'flex items-center gap-2 p-2 hover:bg-gray-50 rounded',
        },
        controls: {
            default: 'flex flex-col gap-2 justify-center',
            button: 'p-2 rounded hover:bg-gray-100',
        },
    },

    // ImageList
    ImageList: {
        default: 'grid gap-4',
        variant: {
            standard: '',
            quilted: 'grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))',
            masonry: 'columns',
            woven: 'grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))',
        },
        cols: {
            1: 'grid-cols-1',
            2: 'grid-cols-2',
            3: 'grid-cols-3',
            4: 'grid-cols-4',
            5: 'grid-cols-5',
            6: 'grid-cols-6',
        },
    },

    ImageListItem: {
        default: 'overflow-hidden rounded',
        hover: 'hover:opacity-75 transition-opacity',
    },

    ImageListItemBar: {
        default: 'absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2',
        position: {
            top: 'top-0 bottom-auto',
            bottom: 'bottom-0 top-auto',
        },
        titleWrap: 'text-sm font-semibold',
        subtitleWrap: 'text-xs',
    },

    // Tooltip
    Tooltip: {
        default: 'relative',
        arrow: 'before:content-[""] before:absolute before:bg-black before:w-2 before:h-2 before:transform before:rotate-45',
        placement: {
            top: 'bottom-full mb-2',
            bottom: 'top-full mt-2',
            left: 'right-full mr-2',
            right: 'left-full ml-2',
        },
        color: {
            default: 'bg-gray-800 text-white',
            light: 'bg-gray-200 text-black',
        },
    },

    // Snackbar
    Snackbar: {
        default: 'fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg',
        anchorOrigin: {
            topCenter: 'top-0 left-1/2 transform -translate-x-1/2',
            bottomCenter: 'bottom-0 left-1/2 transform -translate-x-1/2',
            topLeft: 'top-0 left-0',
            topRight: 'top-0 right-0',
            bottomLeft: 'bottom-0 left-0',
            bottomRight: 'bottom-0 right-0',
        },
        autoHideDuration: 'duration-3000',
        severity: {
            info: 'bg-blue-600',
            warning: 'bg-yellow-600',
            error: 'bg-red-600',
            success: 'bg-green-600',
        },
    },

    // Divider
    Divider: {
        default: 'border-t border-gray-200',
        variant: {
            fullWidth: 'w-full',
            inset: 'ml-8',
            middle: 'mx-auto w-1/2',
        },
    },

    // Accordion
    Accordion: {
        default: 'bg-white border border-gray-200 rounded-md shadow-sm',
        expanded: 'shadow-md',
        summary: {
            default: 'flex items-center justify-between p-4 cursor-pointer',
            expanded: 'bg-gray-50',
        },
        details: 'px-4 py-2',
    },

    // Skeleton
    Skeleton: {
        default: 'animate-pulse bg-gray-300',
        variant: {
            text: 'h-6 rounded',
            circle: 'rounded-full',
            rect: 'rounded-md',
        },
        width: {
            small: 'w-16',
            medium: 'w-32',
            large: 'w-64',
        },
        height: {
            small: 'h-4',
            medium: 'h-8',
            large: 'h-16',
        },
    },

    // Menu
    Menu: {
        default: 'bg-white shadow-lg rounded-md overflow-hidden',
        list: 'py-1',
        item: {
            default: 'px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer',
            selected: 'bg-blue-50 text-blue-600',
            disabled: 'text-gray-400 cursor-not-allowed',
        },
    },

    // MenuItem
    MenuItem: {
        default: 'px-4 py-2 hover:bg-gray-100 cursor-pointer',
        selected: 'bg-blue-50',
    },

    // Groupe de boutons
    ButtonGroup: {
        size: {
            small: 'text-sm p-1',
            medium: 'text-base p-2',
            large: 'text-lg p-3',
        },
        orientation: {
            horizontal: 'flex-row space-x-2',
            vertical: 'flex-col space-y-2',
        },
        variant: {
            contained: 'bg-blue-500 text-white',
            outlined: 'border border-blue-500 text-blue-500',
            text: 'bg-transparent text-blue-500',
        },
    },

    Checkbox: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
            warning: 'text-yellow-500',
            info: 'text-teal-500',
        },
        size: {
            small: 'w-4 h-4',
            medium: 'w-5 h-5',
            large: 'w-6 h-6',
        },
        defaultChecked: 'checked'
    },

    Radio: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
        size: {
            small: 'w-4 h-4',
            medium: 'w-5 h-5',
            large: 'w-6 h-6',
        },
    },

    RadioGroup: {
        row: 'flex-row space-x-4',
        column: 'flex-col space-y-2',
    },

    Select: {
        size: {
            small: 'p-1 text-sm',
            medium: 'p-2 text-base',
            large: 'p-3 text-lg',
        },
        color: {
            primary: 'text-blue-500 border-blue-500',
            secondary: 'text-green-500 border-green-500',
        },
    },

    Slider: {
        color: {
            primary: 'bg-blue-500',
            secondary: 'bg-green-500',
            error: 'bg-red-500',
        },
        size: {
            small: 'h-1',
            medium: 'h-2',
            large: 'h-3',
        },
    },

    Switch: {
        color: {
            primary: 'bg-blue-500',
            secondary: 'bg-green-500',
            error: 'bg-red-500',
        },
        size: {
            small: 'w-10 h-4',
            medium: 'w-12 h-6',
            large: 'w-14 h-8',
        },
        defaultChecked: 'checked'
    },

    FormControl: {
        margin: {
            none: 'm-0',
            dense: 'm-1',
            normal: 'm-2',
        },
        fullWidth: 'w-full',
    },

    FormGroup: {
        row: 'flex-row space-x-4',
        column: 'flex-col space-y-2',
    },

    FormLabel: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
            warning: 'text-yellow-500',
        },
        size: {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
        },
    },

    FormHelperText: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
        size: {
            small: 'text-xs',
            medium: 'text-sm',
            large: 'text-base',
        },
    },

    InputLabel: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
        size: {
            small: 'text-xs',
            medium: 'text-sm',
            large: 'text-base',
        },
    },

    InputAdornment: {
        position: {
            start: 'pl-2',
            end: 'pr-2',
        },
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
    },

    Stepper: {
        orientation: {
            horizontal: 'flex-row space-x-4',
            vertical: 'flex-col space-y-4',
        },
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
    },

    SpeedDial: {
        direction: {
            up: 'flex-col-reverse',
            down: 'flex-col',
            left: 'flex-row-reverse',
            right: 'flex-row',
        },
        size: {
            small: 'w-10 h-10',
            medium: 'w-12 h-12',
            large: 'w-14 h-14',
        },
    },

    Pagination: {
        size: {
            small: 'text-sm p-1',
            medium: 'text-base p-2',
            large: 'text-lg p-3',
        },
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
    },

    Link: {
        color: {
            primary: 'text-blue-500 hover:underline',
            secondary: 'text-green-500 hover:underline',
            error: 'text-red-500 hover:underline',
        },
        variant: {
            text: 'underline',
            button: 'p-2 bg-blue-500 text-white rounded',
        },
    },

    Breadcrumbs: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
        separator: 'text-gray-400',
    },

    CardMedia: {
        size: {
            small: 'h-40',
            medium: 'h-60',
            large: 'h-80',
        },
        variant: {
            square: 'aspect-square',
            rectangle: 'aspect-video',
        },
    },

    CardHeader: {
        titleSize: {
            small: 'text-sm font-medium',
            medium: 'text-base font-semibold',
            large: 'text-lg font-bold',
        },
        subheaderColor: {
            primary: 'text-blue-500',
            secondary: 'text-gray-500',
        },
    },

    CardActionArea: {
        hover: 'hover:bg-gray-100',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
        padding: 'p-4',
    },

    AccordionSummary: {
        expandIcon: {
            default: 'text-gray-500',
            expanded: 'text-blue-500',
        },
        padding: {
            default: 'p-2',
            dense: 'p-1',
        },
    },

    AccordionDetails: {
        padding: {
            default: 'p-4',
            dense: 'p-2',
        },
        background: {
            primary: 'bg-blue-50',
            secondary: 'bg-gray-50',
        },
    },

    AlertTitle: {
        color: {
            primary: 'text-blue-600',
            secondary: 'text-green-600',
            error: 'text-red-600',
            warning: 'text-yellow-600',
            info: 'text-blue-500',
        },
        fontWeight: {
            normal: 'font-normal',
            bold: 'font-bold',
        },
    },

    Backdrop: {
        open: 'fixed inset-0 bg-black bg-opacity-50',
        close: 'hidden',
    },

    Dialog: {
        size: {
            small: 'max-w-sm',
            medium: 'max-w-md',
            large: 'max-w-lg',
        },
        padding: 'p-4',
        background: {
            default: 'bg-white',
            dark: 'bg-gray-800 text-white',
        },
    },

    DialogActions: {
        alignment: {
            left: 'justify-start',
            right: 'justify-end',
            center: 'justify-center',
        },
        spacing: {
            default: 'space-x-4',
            dense: 'space-x-2',
        },
    },

    DialogContent: {
        padding: {
            default: 'p-4',
            dense: 'p-2',
        },
        background: {
            default: 'bg-white',
            light: 'bg-gray-50',
        },
    },

    DialogContentText: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-gray-600',
            error: 'text-red-500',
        },
        fontSize: {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
        },
    },

    DialogTitle: {
        color: {
            primary: 'text-blue-600',
            secondary: 'text-gray-800',
        },
        fontSize: {
            small: 'text-lg',
            medium: 'text-xl',
            large: 'text-2xl',
        },
        fontWeight: 'font-semibold',
    },

    LinearProgress: {
        color: {
            primary: 'bg-blue-500',
            secondary: 'bg-green-500',
            error: 'bg-red-500',
        },
        size: {
            thin: 'h-1',
            medium: 'h-2',
            thick: 'h-4',
        },
    },

    Avatar: {
        size: {
            small: 'w-8 h-8',
            medium: 'w-10 h-10',
            large: 'w-12 h-12',
        },
        shape: {
            circle: 'rounded-full',
            square: 'rounded',
        },
    },

    AvatarGroup: {
        spacing: {
            default: '-space-x-2',
            dense: '-space-x-1',
        },
        size: {
            small: 'w-8 h-8',
            medium: 'w-10 h-10',
            large: 'w-12 h-12',
        },
    },

    Badge: {
        color: {
            primary: 'bg-blue-500 text-white',
            secondary: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
        },
        position: {
            topRight: 'top-0 right-0',
            bottomRight: 'bottom-0 right-0',
            topLeft: 'top-0 left-0',
        },
    },

    Icon: {
        size: {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-xl',
        },
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
    },

    ListItemAvatar: {
        size: {
            small: 'w-8 h-8',
            medium: 'w-10 h-10',
            large: 'w-12 h-12',
        },
        shape: {
            circle: 'rounded-full',
            square: 'rounded',
        },
    },

    ListItemButton: {
        selected: 'bg-blue-50 text-blue-600',
        hover: 'hover:bg-gray-100',
        padding: 'p-2',
    },

    ListItemIcon: {
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
            error: 'text-red-500',
        },
        size: {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-xl',
        },
    },

    ListItemText: {
        color: {
            primary: 'text-gray-800',
            secondary: 'text-gray-600',
        },
        fontSize: {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
        },
    },

    Table: {
        border: 'border border-gray-200',
        striped: 'odd:bg-gray-50',
        hover: 'hover:bg-gray-100',
    },

    TableBody: {
        padding: {
            default: 'p-4',
            dense: 'p-2',
        },
    },

    TableCell: {
        padding: {
            default: 'p-4',
            dense: 'p-2',
        },
        border: 'border-b border-gray-200',
        alignment: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
    },

    TableContainer: {
        shadow: 'shadow-md',
        rounded: 'rounded-lg',
    },

    TableHead: {
        background: 'bg-gray-100',
        fontWeight: 'font-semibold',
    },

    TableRow: {
        hover: 'hover:bg-gray-100',
        selected: 'bg-blue-50',
    },

    Modal: {
        overlay: 'fixed inset-0 bg-black bg-opacity-50',
        content: {
            default: 'bg-white p-4 rounded-lg shadow-lg',
            small: 'max-w-sm',
            medium: 'max-w-md',
            large: 'max-w-lg',
        },
    },

    NoSsr: {
        hide: 'hidden',
        show: 'block',
    },

    Popover: {
        placement: {
            top: 'bottom-2',
            bottom: 'top-2',
            left: 'right-2',
            right: 'left-2',
        },
        padding: 'p-2',
        background: 'bg-white shadow-lg rounded-lg',
    },

    Popper: {
        modifiers: {
            arrow: {
                enabled: true,
                element: '.arrow',
            },
            offset: {
                offset: '0, 10',
            },
        },
        placement: {
            top: 'top-0',
            bottom: 'bottom-0',
            left: 'left-0',
            right: 'right-0',
        },
    },

    Portal: {
        container: 'fixed inset-0 z-50',
        background: 'bg-white',
    },

    Timeline: {
        orientation: 'vertical',
        position: {
            left: 'ml-8',
            right: 'mr-8',
        },
        separator: 'h-1 bg-gray-200',
    },

    TimelineItem: {
        dot: {
            size: 'w-4 h-4 bg-blue-500 rounded-full',
            border: 'border border-white',
        },
        content: {
            padding: 'p-4',
            background: 'bg-white shadow-sm',
            border: 'border-l-2 border-blue-500',
        },
    },

    TreeView: {
        root: 'overflow-auto',
        item: {
            padding: 'p-2',
            hover: 'hover:bg-gray-100',
        },
    },

    TreeItem: {
        label: {
            padding: 'p-2',
            color: 'text-gray-800',
        },
        icon: {
            size: 'text-gray-600',
        },
    },

    SpeedDialAction: {
        size: {
            small: 'w-8 h-8',
            medium: 'w-10 h-10',
        },
        hover: 'hover:bg-gray-200',
        icon: {
            size: {
                small: 'text-sm',
                medium: 'text-base',
            },
        },
    },

    SpeedDialIcon: {
        size: 'w-8 h-8',
        color: {
            primary: 'text-blue-500',
            secondary: 'text-green-500',
        },
    },

    Masonry: {
        columns: {
            small: 'grid grid-cols-1',
            medium: 'grid grid-cols-2',
            large: 'grid grid-cols-3',
        },
        gap: 'gap-4',
    },
};
