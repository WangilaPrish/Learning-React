import { motion } from "framer-motion";

const items = Array.from({ length: 9 }, (_, i) => i + 1); // [1, 2, ..., 9]

export default function StaggeredGrid() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {items.map((item, index) => (
                <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }} // 👈 Delay based on position
                    className="p-4 bg-blue-500 text-white text-center rounded"
                >
                    {item}
                </motion.div>
            ))}
        </div>
    );
}
