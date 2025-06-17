import NewsDetail from '@/components/NewsDetail';
import Link from 'next/link';

import { ReactNode } from 'react';

interface NewsItem {
    slug: string;
    title: string;
    date: string;
    image: string;
    fullContent: string | ReactNode;
    relatedNews: string | ReactNode;
}

const newsData: NewsItem[] = [
    {
        slug: 'tech-startups-to-watch',
        title: 'Tech Startups to Watch',
        date: '2025-06-14',
        image: '/assets/unnamed.jpg',
        fullContent:
            <p>
                In a world increasingly vulnerable to climate change, a new breed of tech startups is harnessing AI to combat environmental crises. Among the frontrunners is Pano AI, a San Francisco-based company that recently raised $44 million in Series B funding. Their mission: to detect wildfires before they spiral out of control. Using high- definition cameras, AI - powered risk modeling, and real - time alert systems, Pano is already monitoring over 30 million acres across the United States, Australia, and Canada.
                <br />
                <br />
                What sets Pano AI apart is its ability to reduce false alarms — a common challenge in wildfire detection — by integrating data from satellites, weather forecasts, and human inputs.Its platform serves not just governments, but also utility companies and first responders, offering a powerful early warning system that buys time for communities.With wildfires becoming more frequent and intense, Pano AI’s approach has drawn praise from climate resilience experts and attracted partnerships with public safety agencies.
                <br />
                <br />
                As climate - tech garners growing investor attention, startups like Pano AI are redefining how we approach disaster mitigation.Their success signals a broader trend: the rise of AI - driven, purpose - built startups that solve complex global challenges.With continued funding and rapid deployment, these startups are proving that tech can be both profitable and planet - positive.
            </p>,
        relatedNews:
            <Link href="news/clean}">Discover how AI is transforming disaster response and climate resilience.</Link>

    },
    {
        slug: 'clean-energy-boom',
        title: 'Clean Energy Boom',
        date: '2025-06-13',
        image: '/assets/pexels-tara-winstead-8386364.jpg',
        fullContent:
            'Solar and wind technologies are scaling faster than ever, reshaping the global energy market...',
        relatedNews: 'Explore the latest advancements in renewable energy technologies.',
    },
    {
        slug: 'smart-cities-future',
        title: 'Smart Cities of the Future',
        date: '2025-06-12',
        image: '/assets/pexels-tara-winstead-8386364.jpg',
        fullContent:
            'Experts envision cities powered by AI traffic control, IoT waste management, and more by 2035...',
        relatedNews: 'Learn how smart technologies are transforming urban living.',
    },
];

const NewsDetailsPage = ({ params }: { params: { slug: string } }) => {
    const article = newsData.find((item) => item.slug === params.slug);

    if (!article) return <div className="p-6 text-center">Article not found.</div>;

    return (
        <NewsDetail
            title={article.title}
            date={article.date}
            image={article.image}
            fullContent={article.fullContent}
            relatedNews={article.relatedNews}
        />
    );
};

export default NewsDetailsPage;
