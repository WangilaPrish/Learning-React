import { motion } from 'framer-motion';

const waveTransition = {
    duration: 1,
    repeat: Infinity,
    ease: 'easeInOut',
};

const Waves = () => {
    return (
        <div className='flex items-center justify-center gap-5 mt-20'>
            {[0, 0.2, 0.4, 0.6].map((delay, index) => (
                <motion.div
                    key={index}
                    className={`h-12 w-20 rounded-lg ${index === 0 ? 'bg-teal-500' :
                        index === 1 ? 'bg-blue-500' :
                            index === 2 ? 'bg-pink-500' :
                                'bg-yellow-500'
                        }`}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ ...waveTransition, delay }}
                />
            ))}
        </div>
    );
};

export default Waves;
