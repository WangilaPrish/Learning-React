import { motion } from 'framer-motion'

const ScrolltoView = () => {

    return (
        <div>
            <motion.div className='h-screen w-screen items-center justify-center flex flex-col'>
                Scroll down to view my card!
            </motion.div>
            <motion.div
                className='bg-green-300 box flex items-center justify-center p-5 rounded-lg shadow-lg cursor-pointer'
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: -200
                }}
                drag
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                }}
                dragConstraints={{ top: -30, bottom: 30, left: -100, right: 100 }}
            >
                <motion.p className='text-center'>I appeared, LOL :)
                    <motion.p>Drag me Around</motion.p>
                </motion.p>
            </motion.div>
        </div >
    )
}

export default ScrolltoView
