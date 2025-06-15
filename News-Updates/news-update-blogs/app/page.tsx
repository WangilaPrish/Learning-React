'use client';

import React from 'react';
import News from '@/components/News';

const page = () => {
    return (
        <div>
            <section
                className="min-h-[40vh] flex flex-col items-center justify-center text-center px-4 my-13 font-serif"
                style={{ backgroundColor: "a2d2ff" }} // ✅ added the "#" to the color
            >
                <h1 className="text-4xl font-bold mb-4">Latest News Updates</h1>
                <p className="text-lg text-gray-700 max-w-xl">
                    Stay updated with the latest news in technology, business, and innovation.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                <News
                    title="Tech Startups to Watch"
                    date="2025-06-14"
                    description="These 3 startups are turning heads with groundbreaking innovation."
                    image="/assets/pexels-tara-winstead-8386364.jpg"
                />
                <News
                    title="Clean Energy Boom"
                    date="2025-06-13"
                    description="How solar and wind are leading the next energy wave."
                    image="/assets/pexels-tara-winstead-8386364.jpg"
                />
                <News
                    title="Smart Cities of the Future"
                    date="2025-06-12"
                    description="A look at AI-powered city infrastructure in 2035."
                    image="/assets/pexels-tara-winstead-8386364.jpg"
                />
            </div>

        </div>
    );
};

export default page;
