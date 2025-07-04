import { motion } from 'framer-motion';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StaggeredFadeInSlideIn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <motion.ul
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        className="p-4 bg-blue-500 text-white rounded-lg"
                        variants={itemVariants}
                    >
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default StaggeredFadeInSlideIn;
