import { useState } from 'react';
import { motion } from 'framer-motion';

const buttonLabels = ['Button A', 'Button B', 'Button C', 'Button D'];

const containerVariants = {
    rest: {},
    hover: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const buttonVariants = {
    rest: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
};

const StaggeredButtons = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={containerVariants}
            initial="rest"
            animate={isHovered ? 'hover' : 'rest'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ display: 'flex', gap: '12px', padding: '20px', background: '#222' }}
        >
            {buttonLabels.map((label, index) => (
                <motion.button
                    key={index}
                    variants={buttonVariants}
                    style={{
                        padding: '10px 20px',
                        background: '#61dafb',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    {label}
                </motion.button>
            ))}
        </motion.div>
    );
};

export default StaggeredButtons;
