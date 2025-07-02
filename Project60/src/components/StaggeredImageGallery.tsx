import React from 'react';
import { motion } from 'framer-motion';

const imageUrls = [
    'https://via.placeholder.com/150?text=1',
    'https://via.placeholder.com/150?text=2',
    'https://via.placeholder.com/150?text=3',
    'https://via.placeholder.com/150?text=4',
];

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // delay between image animations
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const StaggeredImageGallery = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
        >
            {imageUrls.map((url, index) => (
                <motion.img
                    key={index}
                    src={url}
                    alt={`Image ${index + 1}`}
                    variants={imageVariants}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
            ))}
        </motion.div>
    );
};

export default StaggeredImageGallery;
