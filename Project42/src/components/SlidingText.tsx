import { motion } from 'framer-motion';

const SlidingText = () => {
    return (
        <div>
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 260 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                    duration: 1.5
                }}
                className='flex bg-teal-400 h-[150px] w-[370px] my-20 rounded-3xl'
            >
                <p
                    className='text-center flex items-center p-20 font-serif font-semibold'
                >Are you seeing me sliding in?
                    <br />
                    Lol :)
                </p>
            </motion.div>
        </div>
    )
}

export default SlidingText
