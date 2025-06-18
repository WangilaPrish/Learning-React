import { motion } from 'framer-motion'

const FadeComponent = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="flex flex-col items-center gap-4">
                <motion.div className="w-32 h-32 bg-white rounded-full shadow-md" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Click me for Magic!
                </button>
            </div>
        </div>


    )
}

export default FadeComponent
