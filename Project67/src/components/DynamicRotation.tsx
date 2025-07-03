import { motion, useMotionValue, animate } from 'framer-motion';


const DynamicRotation = () => {
    const rotate = useMotionValue(0);

    const handleRotate = () => {
        animate(rotate, rotate.get() + 45, {
            type: 'spring',
            stiffness: 200,
            damping: 20
        });
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-6">
            <motion.div
                className="w-32 h-32 bg-purple-500 rounded-lg"
                style={{ rotate }}
            />
            <button
                onClick={handleRotate}
                className="mt-4 px-6 py-2 bg-purple-700 text-white rounded shadow"
            >
                Rotate Box
            </button>
        </div>
    );
};

export default DynamicRotation;
