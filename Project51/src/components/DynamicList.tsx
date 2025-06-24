import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
};

const DynamicList = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const addItem = () => {
        if (input.trim() === '') return;
        setItems([...items, input]);
        setInput('');
    };

    const removeItem = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <div className="flex gap-2 mb-4">
                <input
                    className="border px-3 py-1 flex-1 rounded"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 rounded" onClick={addItem}>
                    Add
                </button>
            </div>

            <ul className="space-y-2">
                <AnimatePresence>
                    {items.map((item, index) => (
                        <motion.li
                            key={item + index}
                            className="bg-gray-100 p-2 rounded shadow flex justify-between"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={itemVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <span>{item}</span>
                            <button className="text-red-500" onClick={() => removeItem(index)}>✖</button>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default DynamicList;
