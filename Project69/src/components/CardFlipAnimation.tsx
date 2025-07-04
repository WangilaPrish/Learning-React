import { motion } from 'framer-motion';


const CardFlipAnimation = () => {
    const cardVariants = {
        initial: { rotateY: 0 },
        flipped: {
            rotateY: 180,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="perspective">
                <motion.div
                    className="card"
                    variants={cardVariants}
                    initial="initial"
                    whileInView="flipped"
                >
                    <div className="card-face front">Front-side</div>
                    <div className="card-face back">Back-side</div>
                </motion.div>
            </div>
        </div>
    );
};

export default CardFlipAnimation;
