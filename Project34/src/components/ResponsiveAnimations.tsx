import { motion } from 'framer-motion';

const ResponsiveAnimations = () => {
    return (
        <div>
            <motion.button
                whileTap={{ scale: 0.95, opacity: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-3.5 lg:text-xl hover:bg-blue-700 transition duration-300 mt-72 ml-96">
                Click Me
            </motion.button>
        </div>
    )
}

export default ResponsiveAnimations
