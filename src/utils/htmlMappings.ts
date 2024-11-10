// utils/htmlMappings.js
export const htmlMappings : any = {
    // Layout
    Box: 'div',
    Container: 'div',
    Grid: 'div',
    Stack: 'div',

    // Inputs
    Button: 'button',
    ButtonGroup: 'div',
    Checkbox: 'input type="checkbox"', // Spécifie le type checkbox
    Radio: 'input type="radio"', // Spécifie le type radio
    RadioGroup: 'div',
    Select: 'select',
    Slider: 'input type="range"', // Utilise input de type range pour les sliders
    Switch: 'input type="checkbox"', // Switch peut être interprété comme un checkbox
    TextField: 'input type="text"', // Par défaut, un input texte
    FormControl: 'div',
    FormGroup: 'div',
    FormLabel: 'label',
    FormHelperText: 'p',
    InputLabel: 'label',
    InputAdornment: 'div',

    // Navigation
    AppBar: 'header',
    BottomNavigation: 'nav',
    BottomNavigationAction: 'button',
    Breadcrumbs: 'nav',
    Drawer: 'div',
    Link: 'a',
    Menu: 'div',
    MenuItem: 'div',
    Pagination: 'nav',
    SpeedDial: 'div',
    Stepper: 'div',
    Tab: 'button',
    Tabs: 'div',

    // Surfaces
    Accordion: 'div',
    AccordionSummary: 'div',
    AccordionDetails: 'div',
    Card: 'div',
    CardActionArea: 'div',
    CardActions: 'div',
    CardContent: 'div',
    CardHeader: 'div',
    CardMedia: 'div',
    Paper: 'div',

    // Feedback
    Alert: 'div',
    AlertTitle: 'div',
    Backdrop: 'div',
    Dialog: 'div',
    DialogActions: 'div',
    DialogContent: 'div',
    DialogContentText: 'p',
    DialogTitle: 'div',
    CircularProgress: 'div', // Peut aussi être un SVG ou canvas
    LinearProgress: 'div',    // Idem pour les progress bars
    Skeleton: 'div',
    Snackbar: 'div',

    // Data Display
    Avatar: 'div',
    AvatarGroup: 'div',
    Badge: 'span', // Span est souvent plus approprié pour des badges
    Chip: 'span',  // Span pour éviter la structure de bloc de div
    Divider: 'hr',
    Icon: 'span',
    List: 'ul',
    ListItem: 'li',
    ListItemAvatar: 'div',
    ListItemButton: 'button', // Peut être considéré comme un bouton
    ListItemIcon: 'span', // Span car il est souvent un conteneur d’icône
    ListItemText: 'span',
    Table: 'table',
    TableBody: 'tbody',
    TableCell: 'td',
    TableContainer: 'div',
    TableHead: 'thead',
    TableRow: 'tr',
    Tooltip: 'div',
    Typography: 'p',

    // Utils
    Modal: 'div',
    NoSsr: 'div',
    Popover: 'div',
    Popper: 'div',
    Portal: 'div',

    // Lab Components
    Timeline: 'div',
    TimelineItem: 'div',
    TreeView: 'div',
    TreeItem: 'div',
    SpeedDialAction: 'div',
    SpeedDialIcon: 'span', // Utilise span pour les icônes, souvent plus léger
    Masonry: 'div',
};