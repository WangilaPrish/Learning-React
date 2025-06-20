import { motion } from 'framer-motion';

const BouncingBall = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <motion.button

                className="bg-blue-500 text-white p-4 rounded-full h-[350px] w-[250px]"
                animate={{
                    y: [0, -60, 0],
                    x: [0, 60, 0],
                }}
                initial={{ y: 0, x: 0 }}
                transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <img
                    src={'src/assets/mike.jpg'}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-full"
                />
            </motion.button>
        </div>
    );
};

export default BouncingBall;
