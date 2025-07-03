import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const SpringAnimatedPosition = () => {
    const x = useMotionValue(0);
    const [currentX, setCurrentX] = useState(0);

    const clickBox = () => {
        animate(x, x.get() + 100, {
            type: 'spring',
            stiffness: 300,
            damping: 30
        });
    };

    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            setCurrentX(latest);
        });
        return () => unsubscribe();
    }, [x]);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
            <p className="text-lg font-semibold text-gray-700">
                Position X: {currentX.toFixed(0)}px
            </p>

            <motion.div
                className="w-32 h-32 bg-blue-500 rounded-lg cursor-pointer"
                style={{ x }}
                onClick={clickBox}
            />
        </div>
    );
};

export default SpringAnimatedPosition;
