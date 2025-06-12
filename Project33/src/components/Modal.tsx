import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <div className='title'>
                <h1 className='font-bold'>Modal</h1>
                <p>This is a modal component.</p>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='modal-overlay'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClose}
                    >
                        <motion.div
                            className='modal-content'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p>This is the content of the modal.</p>
                            <p>
                                You can add any content you like here, such as text, images, or even other components.
                            </p>
                            <button onClick={handleClose} className='button mt-4'>Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button className='button' onClick={handleClick}>
                Read more
            </button>
        </div>
    );
};

export default Modal;
