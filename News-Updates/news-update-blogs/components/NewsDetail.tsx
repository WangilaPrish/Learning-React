'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'



interface NewsDetailProps {
    title: string;
    date: string;
    image: string;
    fullContent: string;
    relatedNews: string; // Optional prop for related news
}

const NewsDetail = ({ title, date, image, fullContent, relatedNews }: NewsDetailProps) => {

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold m-7 font-serif text-center">{title}</h1>

            <div className="max-w-6xl mx-auto p-6 font-serif grid grid-cols-3 gap-18">
                {/* Left column – 2/3 */}
                <div className="col-span-2 flex flex-col gap-4">
                    {/* ✅ Image on top */}
                    <div className="w-full h-[350px] relative mb-4">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                    <p className="text-gray-500">{date}</p>
                    <p className="text-lg leading-relaxed whitespace-pre-line">{fullContent}</p>
                </div>

                {/* Right column – 1/3 */}
                <div className="bg-gray-100 rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-2">Related News</h2>
                    <motion.p
                        whileHover={{ scale: 1.02, color: '#1d4ed8' }}
                        className="text-sm text-black">{relatedNews}
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
