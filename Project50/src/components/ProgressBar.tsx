import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [isFilling, setIsFilling] = useState(false);


    useEffect(() => {
        setIsFilling(true);
    }, []);

    const variants = {
        initial: { width: '0%' },
        animate: { width: '100%' },
    };

    return (
        <div className="w-full h-6 bg-gray-300 rounded overflow-hidden">
            <motion.div
                className="h-full bg-blue-500"
                variants={variants}
                initial="initial"
                animate={isFilling ? 'animate' : 'initial'}
                transition={{ duration: 2, ease: 'easeInOut' }}
            />
        </div>
    );
};

export default ProgressBar;
