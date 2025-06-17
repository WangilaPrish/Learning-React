import Link from 'next/link';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';

interface NewsProps {
    index: number;
    date: string;
    title: string;
    slug: string;
    description: string;
    image: string;
}

const News = ({ date, title, description, image, slug }: NewsProps) => {
    return (
        <div
            className="relative w-95 h-90 rounded-2xl bg-slate-50 overflow-hidden bg-cover bg-center shadow-md border border-gray-300 group transition-all duration-300"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-opacity-40"></div>

            <motion.div
                initial={{ opacity: 1, y: 115 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 cursor-pointer font-serif"
            >
                <span className="text-sm text-gray-300">{date}</span>
                <h2 className="text-xl font-bold mb-5">{title}</h2>

                <div className="space-y-2">
                    <p className="text-sm">{description}</p>

                    <div className="grid grid-cols-2 gap-1 mt-3">
                        <Link href={`/news/${slug}`}>
                            <button className="outline-1 text-black text-sm py-1 px-3 rounded-2xl cursor-pointer hover:bg-gray-200 w-2/3">
                                Read More
                            </button>
                        </Link>
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
