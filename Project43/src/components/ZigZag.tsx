import { motion } from 'framer-motion';

const ZigZag = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                animate={{
                    x: [0, 100, 0, -100, 0], // left-right-left
                    y: [0, -50, -100, -50, 0], // up-down-up
                }}
                transition={{
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                className="w-12 h-20 bg-blue-500"
            />
        </div>
    );
};

export default ZigZag;
