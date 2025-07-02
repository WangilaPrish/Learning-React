import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const LongPressToResize = () => {
    const [isLarge, setIsLarge] = useState(false);
    const pressTimer = useRef<NodeJS.Timeout | null>(null);

    const handleTapStart = () => {
        // Start a 600ms timer when press begins
        pressTimer.current = setTimeout(() => {
            setIsLarge(true);
        }, 600); // You can adjust this delay
    };

    const handleTapCancel = () => {
        // Cancel the timer if press is released early
        if (pressTimer.current) {
            clearTimeout(pressTimer.current);
            pressTimer.current = null;
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <motion.div
                onTapStart={handleTapStart}
                onTapCancel={handleTapCancel}
                onTap={handleTapCancel} // Optional: ensure tap without long press doesn't trigger it
                animate={{
                    width: isLarge ? 200 : 100,
                    height: isLarge ? 200 : 100,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-blue-500 rounded-lg"
            />
        </div>
    );
};

export default LongPressToResize;
