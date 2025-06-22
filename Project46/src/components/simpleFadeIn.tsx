import { motion } from 'framer-motion';

const SimpleFadeIn = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <motion.div
                className='bg-teal-500 h-36 w-40 rounded-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
            >

            </motion.div>
        </div>
    )
}

export default SimpleFadeIn
