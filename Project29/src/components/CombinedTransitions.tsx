import { motion } from "framer-motion";

const CombinedTransitions = () => {
    return (
        <div>
            <motion.div>
                <motion.div className="title">
                    <h1 className='font-bold'> This is a combined transition effect</h1>
                    <p>I will majorly use framer motion and it's various hooks</p>
                </motion.div>
                <motion.div>
                    <motion.div
                        animate={{
                            x: [0, 200, 0],          // horizontal movement
                            y: [0, 200, 0],          // vertical movement
                            rotate: [0, 360, 0],     // rotation
                            scale: [1, 1.5, 1],      // scaling
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className="square">
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CombinedTransitions
