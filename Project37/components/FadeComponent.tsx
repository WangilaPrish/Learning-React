import { motion } from 'framer-motion'

const FadeComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <motion.div>
                {/* Your animated content */}
            </motion.div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            >
                Click me for Magic!
            </button>
        </div>

    )
}

export default FadeComponent
