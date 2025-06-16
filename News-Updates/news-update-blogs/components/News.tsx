
import { Share2 } from 'lucide-react'; // Lucide icon (you can use any icon library)
import { motion } from 'framer-motion'; // For animations

interface NewsProps {
    date: string;
    title: string;
    description: string;
    image: string; // URL to image
}


const News = ({ date, title, description, image }: NewsProps) => {
    return (
        <div
            className="relative w-95 h-90 rounded-2xl bg-slate-50 overflow-hidden bg-cover bg-center shadow-md border border-gray-300 group transition-all duration-300"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-opacity-40"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 1, y: 115 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 font-serif"
            >
                <span className="text-sm text-gray-300">{date}</span>
                <h2 className="text-xl font-bold mb-5">{title}</h2>

                <div
                    className="space-y-2">
                    <p className="text-sm">{description}</p>

                    <div className="grid grid-cols-2 gap-1 mt-3">
                        <button className="outline-1 text-black text-sm py-1 px-3 cursor-pointer rounded-2xl hover:bg-gray-200 w-2/3">
                            Read More
                        </button>
                        <button className="text-black outline-1 p-2 rounded-2xl flex justify-center cursor-pointer items-center hover:bg-gray-200 w-2/3">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default News;
