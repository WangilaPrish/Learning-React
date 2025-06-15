'use client';

import { Share2 } from 'lucide-react';

interface NewsProps {
    title: string;
    description: string;
    date: string;
    image: string;
}

const News = ({ title, description, date, image }: NewsProps) => {
    return (
        <div
            className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden bg-cover bg-center shadow-md border border-gray-300 group"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 font-serif">
                <h2 className="text-xl font-bold">{title}</h2>

                {/* Hidden content revealed on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 space-y-2">
                    <span className="text-sm text-gray-300">{date}</span>
                    <p className="text-sm">{description}</p>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-white text-black text-sm py-1 px-3 rounded hover:bg-gray-200">
                            Read More
                        </button>
                        <button className="bg-white text-black p-2 rounded flex justify-center items-center hover:bg-gray-200">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
