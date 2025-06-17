'use client';

import Image from 'next/image';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NewsDetailProps {
    title: string;
    date: string;
    image: string;
    fullContent: string | ReactNode;
    relatedNews: string | ReactNode;
}

const NewsDetail: React.FC<NewsDetailProps> = ({
    title,
    date,
    image,
    fullContent,
    relatedNews,
}) => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 font-serif">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">{title}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left/main content column */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {/* Image */}
                    <div className="relative w-full h-[200px] sm:h-[280px] md:h-[320px]">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover rounded-md"
                            priority
                        />
                    </div>

                    {/* Date */}
                    <p className="text-sm text-gray-500">{date}</p>

                    {/* Full article */}
                    <div className="text-base leading-relaxed text-gray-800 whitespace-pre-line">
                        {fullContent}
                    </div>
                </div>

                {/* Right/related content column */}
                <div className="bg-gray-100 rounded-md p-4">
                    <h2 className="text-lg font-semibold mb-2">Related News</h2>
                    <motion.div
                        whileHover={{ scale: 1.02, color: '#1d4ed8' }}

                        className="text-sm text-gray-700">{relatedNews}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
