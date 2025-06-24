import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ToolTip = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <motion.span
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    whileHover={{ scale: 1.1 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <FaGithub size={24} />
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={showTooltip ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        style={{ marginTop: 8, pointerEvents: 'none' }}
                    >
                        Click the icon to visit github!
                    </motion.p>
                </motion.span>
            </a>
        </div>
    );
}

export default ToolTip
