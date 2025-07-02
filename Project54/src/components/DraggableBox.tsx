import { motion } from 'framer-motion';

const DraggableBox = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-teal-500">
            <motion.div
                className='bg-white w-64 h-64 rounded-lg'
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                initial={{ backgroundColor: '#fff' }}
                whileDrag={{ backgroundColor: 'blue' }}
            >

            </motion.div>
        </div>
    )
}

export default DraggableBox
