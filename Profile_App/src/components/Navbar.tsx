import { Home, Info, Book, GraduationCap, Phone } from 'lucide-react';

interface Props {
    setTab: (tab: 'home' | 'about' | 'projects' | 'courses' | 'contact') => void;
}

export default function Navbar({ setTab }: Props) {
    return (
        <aside className="w-64 h-screen bg-white border-r p-4 flex flex-col gap-6 fixed">
            <button onClick={() => setTab('home')} className="flex items-center gap-2 hover:text-blue-500">
                <Home size={18} /> Home
            </button>
            <button onClick={() => setTab('about')} className="flex items-center gap-2 hover:text-blue-500">
                <Info size={18} /> About
            </button>
            <button onClick={() => setTab('projects')} className="flex items-center gap-2 hover:text-blue-500">
                <Book size={18} /> Projects
            </button>
            <button onClick={() => setTab('courses')} className="flex items-center gap-2 hover:text-blue-500">
                <GraduationCap size={18} /> Courses
            </button>
            <button onClick={() => setTab('contact')} className="flex items-center gap-2 hover:text-blue-500">
                <Phone size={18} /> Contact
            </button>
        </aside>
    );
}
