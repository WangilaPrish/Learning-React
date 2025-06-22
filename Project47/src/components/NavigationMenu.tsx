'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const menuVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%' }
};

const SlideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                className="p-2 bg-blue-600 text-white rounded m-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Close' : 'Open'} Menu
            </button>

            {/* Sliding Menu */}
            <motion.div
                className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 z-50 shadow-lg"
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
            >
                <h2 className="text-xl font-bold mb-4">Navigation</h2>
                <ul className="space-y-3">
                    <li><a href="#" className="hover:text-teal-300">Home</a></li>
                    <li><a href="#" className="hover:text-teal-300">About</a></li>
                    <li><a href="#" className="hover:text-teal-300">Services</a></li>
                    <li><a href="#" className="hover:text-teal-300">Contact</a></li>
                </ul>
            </motion.div>
        </div>
    );
};

export default SlideMenu;
