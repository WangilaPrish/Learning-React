import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const boxVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
};

const ComplexTimelineAnimation = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <motion.div
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                {[1, 2, 3, 4].map((item) => (
                    <motion.div
                        key={item}
                        className="w-40 h-40 bg-purple-500 text-white text-xl font-bold rounded-lg shadow-lg flex items-center justify-center"
                        variants={boxVariants}
                    >
                        Box {item}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ComplexTimelineAnimation;
