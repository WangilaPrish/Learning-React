
import { Share2 } from 'lucide-react'; // Lucide icon (you can use any icon library)

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
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-opacity-50"></div>

            {/* Text content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 font-serif">
                <span className="text-sm text-gray-300">{date}</span>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm mt-2">{description}</p>

                {/* Hover controls */}
                <div className="grid grid-cols-2 gap-2 mt-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="text-black text-sm font-medium py-1 px-3 rounded cursor-pointer hover:bg-gray-200 ">
                        Read More
                    </button>
                    <button className="text-black p-2 cursor-pointer rounded hover:bg-gray-200 flex items-center justify-center">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;
