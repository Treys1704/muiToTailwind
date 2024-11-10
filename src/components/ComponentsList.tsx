import { motion } from 'framer-motion';

const components = {
    'Layout Components': [
        'Container', 'Grid', 'Stack', 'Box'
    ],
    'Input Components': [
        'Button', 'TextField', 'Select', 'Checkbox', 'Radio', 'Switch'
    ],
    'Data Display': [
        'Typography', 'List', 'Table', 'Chip', 'Badge'
    ],
    'Navigation': [
        'AppBar', 'Menu', 'Tabs', 'Drawer'
    ],
    'Surfaces': [
        'Card', 'Paper', 'Accordion'
    ],
    'Feedback': [
        'Alert', 'Snackbar', 'Dialog', 'Progress'
    ],
    'Data Grid': [
        'DataGrid', 'DataGridPro'
    ],
    'Date & Time': [
        'DatePicker', 'TimePicker', 'DateTimePicker'
    ],
    'Lab Components': [
        'Timeline', 'TreeView', 'MasonryGrid'
    ]
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

function ComponentsList() {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {Object.entries(components).map(([category, items]) => (
                    <motion.div
                        key={category}
                        variants={item}
                        className="bg-gray-800 rounded-lg p-6"
                    >
                        <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                        <ul className="space-y-2">
                            {items.map((component) => (
                                <motion.li
                                    key={component}
                                    whileHover={{ x: 5 }}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {component}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default ComponentsList;