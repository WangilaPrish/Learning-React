import { motion } from 'framer-motion';

const StaggeredTextReveal = () => {
    return (
        <div>
            <motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Staggered Text Reveal
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    This is a simple example of staggered text reveal using Framer Motion.
                </motion.p>
            </motion.div>
        </div>
    )
}

export default StaggeredTextReveal
