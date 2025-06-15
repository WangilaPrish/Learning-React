
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
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-opacity-40"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 font-serif">
                <span className="text-sm text-gray-300">{date}</span>
                <h2 className="text-xl font-bold">{title}</h2>


                {/* Hidden content revealed on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 space-y-2">

                    <p className="text-sm">{description}</p>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-white text-black text-sm py-1 px-3 cursor-pointer rounded hover:bg-gray-200">
                            Read More
                        </button>
                        <button className="bg-white text-black p-2 rounded flex justify-center cursor-pointer items-center hover:bg-gray-200">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
