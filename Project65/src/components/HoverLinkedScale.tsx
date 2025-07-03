import { motion, useMotionValue } from 'framer-motion';

const HoverLinkedScale = () => {
    const scale = useMotionValue(1);

    return (
        <div className='flex items-center justify-center h-screen'>
            <motion.button
                className='bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg'
                style={{ scale }}
                onHoverStart={() => scale.set(1.2)}
                onHoverEnd={() => scale.set(1)}
            >
                Hover Me
            </motion.button>
        </div>
    );
};

export default HoverLinkedScale;
