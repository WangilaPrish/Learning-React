import { useState } from 'react';
import { motion } from 'framer-motion';

const SkewedTransition = () => {
    const [isSkewed, setIsSkewed] = useState(false);


    return (
        <div>
            <motion.div className='title'>
                <h1 className='font-bold'>Skewed Transition Example</h1>
                <p className='font-semibold'>This is a simple example of a skewed transition using Framer Motion.</p>
            </motion.div>

            <motion.div
                className='container'
                initial={{ skewX: 0, opacity: 0 }}
                animate={{
                    skewX: isSkewed ? -20 : 0,
                    opacity: 1
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                onClick={() => setIsSkewed(prev => !prev)}
                style={{ cursor: "pointer" }}
            >
            </motion.div>
        </div>
    );
};

export default SkewedTransition;
