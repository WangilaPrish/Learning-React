import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    'https://via.placeholder.com/300x400?text=Image+1',
    'https://via.placeholder.com/300x400?text=Image+2',
    'https://via.placeholder.com/300x400?text=Image+3',
];

const swipeConfidenceThreshold = 100;

const GestureGallery = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 = up, 1 = down

    const paginate = (newDirection: number) => {
        const newIndex = index + newDirection;
        if (newIndex >= 0 && newIndex < images.length) {
            setDirection(newDirection);
            setIndex(newIndex);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-900">
            <div className="relative w-[300px] h-[400px] overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={index}
                        src={images[index]}
                        drag="y"
                        onDragEnd={(e, info) => {
                            if (info.offset.y < -swipeConfidenceThreshold) {
                                paginate(1); // Swipe up = next image
                            } else if (info.offset.y > swipeConfidenceThreshold) {
                                paginate(-1); // Swipe down = previous image
                            }
                        }}
                        initial={{ y: direction > 0 ? 300 : -300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: direction > 0 ? -300 : 300, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="absolute w-full h-full object-cover rounded-lg"
                    />
                </AnimatePresence>
            </div>
        </div>
    );
};

export default GestureGallery;
