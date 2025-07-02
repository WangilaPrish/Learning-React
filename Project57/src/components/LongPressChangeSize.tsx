import { motion } from 'framer-motion';
import { useState } from 'react';

const LongPressToResize = () => {
    const [isLarge, setIsLarge] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <motion.div
                onTapStart={() => {
                    // Start timer when user presses
                    this.pressTimer = setTimeout(() => setIsLarge(true), 500); // 500ms = long press
                }}
                onTapCancel={() => {
                    // Cancel if user releases early
                    clearTimeout(this.pressTimer);
                }}
                onTap={() => {
                    // Optional: toggle back on normal tap
                    setIsLarge(false);
                }}
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
