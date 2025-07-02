import { motion } from 'framer-motion';

const RotateDrag = () => {
    return (
        <div className="bg-teal-500 h-screen flex items-center justify-center">
            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                onDrag={(e, info) => {
                    const rotation = info.offset.x / 10; // Adjust this value for more or less rotation
                    e.currentTarget.style.transform = `rotate(${rotation}deg)`;
                }}
                className="bg-white w-48 h-56 rounded-lg shadow-lg flex items-center justify-center"
            >
                <p className="text-teal-700 font-semibold">Drag Me</p>
            </motion.div>
        </div>
    );
};

export default RotateDrag;
