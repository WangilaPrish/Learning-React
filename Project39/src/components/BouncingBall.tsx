import { motion } from 'framer-motion';

const BouncingBall = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <motion.button
                className="bg-blue-500 text-white p-4 rounded-full h-[50px] w-[50px]"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 30, 0],
                }}
                initial={{ y: 0, x: 0 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
};

export default BouncingBall;
