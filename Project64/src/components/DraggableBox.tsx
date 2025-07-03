import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const DraggableBox = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const unsubscribeX = x.on("change", (latestX) =>
            setPosition((prev) => ({ ...prev, x: latestX }))
        );
        const unsubscribeY = y.on("change", (latestY) =>
            setPosition((prev) => ({ ...prev, y: latestY }))
        );

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [x, y]);

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-6'>
            <p className='text-lg font-medium text-gray-800'>
                Position → x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
            </p>

            <motion.div
                drag
                style={{ x, y }}
                className='bg-teal-500 w-64 h-64 rounded-lg shadow-lg'
            />
        </div>
    );
};

export default DraggableBox;
