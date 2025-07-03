import { motion } from 'framer-motion';
const StaggeredGridList = () => {
    return (
        <div>
            <motion.div>
                <motion.div
                    className="grid grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, staggerChildren: 0.2 }}
                >
                    {[...Array(9)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="bg-blue-500 h-32 flex items-center justify-center text-white"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Item {index + 1}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default StaggeredGridList
