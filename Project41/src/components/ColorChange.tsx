import { motion } from 'framer-motion';

const ColorChange = () => {
    return (
        <div
            className='flex items-center justify-center h-screen bg-gray-100'
        >
            <motion.div
                className='w-64 h-64 rounded-lg'
                initial={{ backgroundColor: '#ff0000' }}
                animate={{ backgroundColor: '#00ff00' }}
                exit={{ backgroundColor: '#0000ff' }}
                transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
            >

            </motion.div>
        </div>
    )
}

export default ColorChange
