import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    variant?: 'primary' | 'secondary'; // Add more variants as needed
}

const FlipCard: React.FC<FlipCardProps> = ({
    frontContent,
    backContent,
    variant = 'primary',
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    const variantClasses = {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-green-500 text-white',
    };

    return (
        <div
            className="perspective-1000 cursor-pointer w-64 h-40"
            onClick={handleFlip}
        >
            <motion.div
                className={`relative w-full h-full rounded-lg shadow-lg ${variantClasses[variant]}`}
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4">
                    {frontContent}
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4 transform rotate-y-180">
                    {backContent}
                </div>
            </motion.div>
        </div>
    );
};

export default FlipCard;
