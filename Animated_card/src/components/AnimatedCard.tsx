import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Using Lucide for a stylish close icon

interface Memory {
    text: string;
    imageUrl: string;
}

const AnimatedCard: React.FC = () => {
    const [memories, setMemories] = useState<Memory[]>([
        { text: 'Anniversary 2024', imageUrl: 'src/assets/_MG_4476.jpg' },
        { text: 'Anniversary 2025', imageUrl: 'src/assets/_MG_4447.jpg' },
    ]);

    const [newText, setNewText] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

    const handleAddMemory = () => {
        if (newText.trim() && newImageUrl.trim()) {
            setMemories([...memories, { text: newText, imageUrl: newImageUrl }]);
            setNewText('');
            setNewImageUrl('');
        }
    };

    const handleDeleteMemory = (index: number) => {
        setMemories(memories.filter((_, i) => i !== index));
    };

    const handleSelectMemory = (memory: Memory) => {
        setSelectedMemory(memory);
    };

    const handleCloseModal = () => {
        setSelectedMemory(null);
    };

    return (
        <motion.div
            className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h1 className="text-3xl font-bold text-center mb-6">Memory Lane</h1>

            {/* Input Fields */}
            <div className="mb-4 flex flex-col md:flex-row flex-wrap gap-4">
                <input
                    type="text"
                    placeholder="Memory Text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/2"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/2"
                />
                <motion.button
                    onClick={handleAddMemory}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-colors"
                >
                    Add Memory
                </motion.button>
            </div>

            {/* Memory Cards */}
            <div className="flex flex-wrap gap-6 justify-center">
                {memories.map((memory, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center max-w-xs shadow cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => handleSelectMemory(memory)}
                    >
                        <p className="text-lg mb-2 font-semibold">{memory.text}</p>
                        <img
                            src={memory.imageUrl}
                            alt={memory.text}
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <motion.button
                            onClick={(e) => {
                                e.stopPropagation(); // prevent click from opening modal
                                handleDeleteMemory(index);
                            }}
                            whileHover={{ scale: 1.05, backgroundColor: '#EF4444' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-500 text-white px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-all"
                        >
                            Delete
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            {/* Modal for Expanded Image */}
            <AnimatePresence>
                {selectedMemory && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseModal}
                    >
                        {/* X Button */}
                        <motion.button
                            onClick={handleCloseModal}
                            whileHover={{ scale: 1.2 }}
                            className="absolute top-6 right-6 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700"
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.img
                            src={selectedMemory.imageUrl}
                            alt={selectedMemory.text}
                            className="max-w-full max-h-full rounded-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking on image
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AnimatedCard;
