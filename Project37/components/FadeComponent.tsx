import { motion } from 'framer-motion';
import { useState } from 'react';

const FadeComponent = () => {

    const [fade, setFade] = useState(true);

    const handleClick = () => {
        setFade(!fade);
    };
    return (
        <div>
            <motion.div>
                <motion.h1
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="text-3xl font-bold mb-4"
                >
                    Welcome to the Magic of Framer Motion!
                </motion.h1>
            </motion.div>
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Click me for Magic!
            </button>
        </div>
    )
}

export default FadeComponent
