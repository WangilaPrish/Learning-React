
import { motion } from 'framer-motion';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // delay between items
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const StaggeredList = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    style={{ marginBottom: '10px', background: '#eee', padding: '10px' }}
                >
                    {item}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default StaggeredList;
