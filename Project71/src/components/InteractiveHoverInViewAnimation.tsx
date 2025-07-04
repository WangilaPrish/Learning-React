import { motion } from 'framer-motion';


const cards = [1, 2, 3, 4, 5, 6];

const InteractiveHoverInViewAnimation = () => {
    return (
        <div className="min-h-screen bg-gray-900 p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="h-40 rounded-xl bg-gray-800 flex items-center justify-center text-white text-xl font-bold cursor-pointer shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#3B82F6", // Tailwind blue-500
                            transition: { duration: 0.2 },
                        }}
                    >
                        Card {card}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveHoverInViewAnimation
