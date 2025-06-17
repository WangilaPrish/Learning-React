// app/news/[slug]/page.tsx
import NewsDetail from '@/components/NewsDetail';

interface NewsItem {
    slug: string;
    title: string;
    date: string;
    image: string;
    fullContent: string;
}

const newsData: NewsItem[] = [

    {
        slug: 'tech-startups-to-watch',
        title: 'Tech Startups to Watch',
        date: '2025-06-14',
        image: '/assets/pexels-tara-winstead-8386364.jpg',
        fullContent:
            'These 3 startups are turning heads with groundbreaking innovation in AI, health tech, and sustainability...',
    },
    {
        slug: 'clean-energy-boom',
        title: 'Clean Energy Boom',
        date: '2025-06-13',
        image: '/assets/pexels-tara-winstead-8386364.jpg',
        fullContent:
            'Solar and wind technologies are scaling faster than ever, reshaping the global energy market...',
    },
    {
        slug: 'smart-cities-future',
        title: 'Smart Cities of the Future',
        date: '2025-06-12',
        image: '/assets/pexels-tara-winstead-8386364.jpg',
        fullContent:
            'Experts envision cities powered by AI traffic control, IoT waste management, and more by 2035...',
    },
];

const NewsDetailsPage = ({ params }: { params: { slug: string } }) => {
    const article = newsData.find((item) => item.slug === params.slug);

    if (!article) return <div className="p-6 text-center">Article not found.</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 font-serif">
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <p className="text-gray-500 mb-4">{article.date}</p>
            <image
                src={article.image}
                alt={article.title}
                className="rounded-lg mb-6 w-full max-h-[400px] object-cover"
            />
            <p className="text-lg leading-relaxed">{article.fullContent}</p>
        </div>
    );
};

export default NewsDetailsPage;
