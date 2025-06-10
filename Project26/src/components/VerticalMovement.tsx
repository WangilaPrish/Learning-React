import { motion, useMotionValue } from 'framer-motion';

const VerticalMovement = () => {
    const y1 = useMotionValue(0);
    const y2 = useMotionValue(0);
    const y3 = useMotionValue(0);
    const y4 = useMotionValue(0);

    return (
        <div>
            <motion.div className='title'>
                <p>Let the Emoji's dance</p>
            </motion.div>
            <motion.div
                className='container'>
                <motion.button
                    style={{ y: y1 }}
                    animate={{ y: [0, -50, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                    className='circle'>
                    <span role="img" aria-label="dancing emoji" style={{ fontSize: '2rem' }}>💃</span>
                </motion.button>
                <motion.button
                    style={{ y: y2 }}
                    animate={{ y: [0, -50, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className='circle'>
                    <span role="img" aria-label="dancing emoji" style={{ fontSize: '2rem' }}>🕺</span>
                </motion.button>
                <motion.button
                    style={{ y: y3 }}
                    animate={{ y: [0, -50, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
                    className='circle'>
                    <span role="img" aria-label="dancing emoji" style={{ fontSize: '2rem' }}>🕴️</span>
                </motion.button>
                <motion.button
                    style={{ y: y4 }}
                    animate={{ y: [0, -50, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    className='circle'>
                    <span role="img" aria-label="dancing emoji" style={{ fontSize: '2rem' }}>👯</span>
                </motion.button>
            </motion.div>
        </div >
    )
}

export default VerticalMovement
