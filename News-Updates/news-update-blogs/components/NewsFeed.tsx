'use client';

import React from 'react';

interface NewsDetailProps {
    title: string;
    date: string;
    image: string;
    fullContent: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ title, date, image, fullContent }) => {
    return (
        <div className="max-w-4xl mx-auto p-6 font-serif">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
            <p className="text-gray-500 mb-4">{date}</p>
            <image
                src={image}
                alt={title}
                className="rounded-lg mb-6 w-full max-h-[400px] object-cover"
            />
            <p className="text-lg leading-relaxed whitespace-pre-line">
                {fullContent}
            </p>
        </div>
    );
};

export default NewsDetail;
