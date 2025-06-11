import { motion } from 'framer-motion';

const SequentialTransitions = () => {
    return (
        <div>
            <motion.div className='title'>
                Sequential Transitions
            </motion.div>
            <motion.div
                className='mt-72 items-center flex justify-center'
                transition={{ duration: 4.9, delay: 0.9, repeat: Infinity, repeatType: 'reverse' }}
                animate={{ x: [0, 100, 0] }}>

                <motion.button
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 2.5, delay: 0.1, repeat: Infinity, repeatType: 'reverse' }}
                    className='button rounded-xl'>

                </motion.button>
                <motion.button
                    animate={{ y: [0, -50, 0], opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.1, repeat: Infinity, repeatType: 'mirror' }}
                    className='button rounded-full'>

                </motion.button>
                <motion.button
                    animate={{ rotate: [0, 360], opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.1, repeat: Infinity, repeatType: 'loop' }}
                    className='button'>

                </motion.button>
                <motion.button
                    animate={{ y: [0, 50, 0], opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.1, repeat: Infinity, repeatType: 'mirror' }}
                    className='button'>

                </motion.button>

            </motion.div>
        </div>
    )
}

export default SequentialTransitions
