import { motion } from 'framer-motion';
import { useState } from 'react';

const FadeIn_Out = () => {

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.9 }}
                className='main'>
            </motion.div>
            <button className='button' onClick={handleClick}>
                Click me to fade in or out
            </button>
        </div>
    )
}

export default FadeIn_Out
