import { motion, useMotionValue } from 'framer-motion'

const BasicTransition = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    return (
        <div>
            <motion.div className='bg-green-200 p-4 rounded-lg shadow-lg items-center justify-center text-center m-5'>
                <h1 className='font-bold'>Basic Transition</h1>
                <p className='font-serif'>This is a simple example of a basic transition using Framer Motion.</p>
            </motion.div>
            <motion.div
                style={{ x, y }}
                animate={{ x: 100, y: 100 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className='flex items-center justify-center m-5'>
                <motion.button
                    className='bg-blue-500 p-20 rounded-lg shadow-lg'
                > Let me slide :)
                </motion.button>
            </motion.div>
        </div>
    )
}

export default BasicTransition
