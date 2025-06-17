'use client';

import React from 'react';
import News from '@/components/News';

const page = () => {
    return (
        <div>
            <section
                className="min-h-[30vh] flex flex-col items-center justify-center text-center px-4 py-10 md:py-16 font-serif"
                style={{ backgroundColor: "#a2d2ff" }}
            >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Latest News Updates</h1>
                <p className="text-base md:text-lg text-gray-700 max-w-xl">
                    Stay updated with the latest news in technology, business, and innovation.
                </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 lg:px-12 py-6">

                <News
                    index={0}
                    slug="tech-startups-to-watch"
                    title="Tech Startups to Watch"
                    date="2025-06-14"
                    description="These 3 startups are turning heads with groundbreaking innovation."
                    image="/assets/pexels-tara-winstead-8386364.jpg"
                />
                <News
                    index={1}
                    slug="clean-energy-boom"
                    title="Clean Energy Boom"
                    date="2025-06-13"
                    description="How solar and wind are leading the next energy wave."
                    image="/assets/pexels-tara-winstead-8386364.jpg"
                />
                <News
                    index={2}
                    slug="smart-cities-future"
                    title="Smart Cities of the Future"
                    date="2025-06-12"
                    description="A look at AI-powered city infrastructure in 2035 as envisioned by experts."
                    image="/assets/pexels-tara-winstead-8386364.jpg"
                />
            </div>
        </div>
    );
};

export default page;
