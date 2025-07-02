import { motion } from 'framer-motion';

const SwipeableCard = () => {
    return (
        <div>
            <motion.div
                drag="x"
                onDragEnd={(_, info) => {
                    if (info.offset.x > 100) {
                        console.log('Swiped right!');
                    } else if (info.offset.x < -100) {
                        console.log('Swiped left!');
                    }
                }}
            >
                <div className="p-4 rounded-lg shadow bg-white">
                    <p>Swipe me!</p>
                </div>
            </motion.div>

        </div>
    )
}

export default SwipeableCard
