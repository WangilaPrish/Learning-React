import { motion } from 'framer-motion';
import { useState } from 'react';

const TaptochangeColor = () => {
    const [color, setColor] = useState('bg-blue-500');

    const handleTap = () => {
        const colors = ['bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <motion.div
                className={`w-64 h-64 ${color} rounded-lg`}
                onTap={handleTap}
            >

            </motion.div>
        </div>
    )
}

export default TaptochangeColor
