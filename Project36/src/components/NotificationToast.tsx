import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const NotificationToast = () => {
    const [toastOpen, setToastOpen] = useState(false);

    const handleClick = () => {
        setToastOpen((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <AnimatePresence>
                {toastOpen && (
                    <motion.div
                        key="toast"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-blue-600 text-white px-6 py-3 rounded shadow-lg fixed top-5 z-50"
                    >
                        This is a notification. Don’t be amazed—I'll be a great developer soon. Prish the software gods to help me!
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={handleClick}
                className="mt-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                {toastOpen ? 'Hide Toast' : 'Slide Toast'}
            </button>
        </div>
    );
};

export default NotificationToast;
