import { motion, useMotionValue, useTransform } from 'framer-motion';

const RotateDrag = () => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-100, 100], [-30, 30]); // maps x drag to -30° to 30°

    return (
        <div className="bg-teal-500 h-screen flex items-center justify-center">
            <motion.div
                drag="x"
                style={{ x, rotate }}
                className="bg-white w-48 h-56 rounded-lg shadow-lg flex items-center justify-center"
            >
                <p className="text-teal-700 font-semibold">Drag Me</p>
            </motion.div>
        </div>
    );
};

export default RotateDrag;
