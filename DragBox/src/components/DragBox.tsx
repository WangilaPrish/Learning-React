import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const DragBox = () => {
    const x = useMotionValue(200)
    const y = useMotionValue(200)

    const scale = useTransform(y, [0, 300], [1, 0.5])
    return (
        <div>
            <motion.div
                className='box bg-yellow-300 p-4 rounded-lg shadow-lg text-center cursor-pointer'
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                style={{
                    x,
                    y,
                    scale
                }}
            >
                Drag me!
            </motion.div>
        </div>
    )
}

export default DragBox
