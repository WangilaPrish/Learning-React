import { FaTwitter, FaYoutube, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="bg-gray-100 p-6 rounded shadow-md max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <div className="flex gap-6 text-lg">
                <a href="#" className="flex items-center gap-2"><FaTwitter /> Twitter</a>
                <a href="#" className="flex items-center gap-2"><FaYoutube /> YouTube</a>
                <a href="#" className="flex items-center gap-2"><FaGithub /> GitHub</a>
                <a href="#" className="flex items-center gap-2"><FaInstagram /> Instagram</a>
            </div>
        </div>
    );
}
