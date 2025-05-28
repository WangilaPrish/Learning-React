import { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './components/TabContent/Home.tsx';
import About from './components/TabContent/About.tsx';
import Projects from './components/TabContent/Projects.tsx';
import Courses from './components/TabContent/Courses.tsx';
import Contact from './components/TabContent/Contact.tsx';

export default function App() {
    const [tab, setTab] = useState<'home' | 'about' | 'projects' | 'courses' | 'contact'>('home');

    return (
        <div className="flex">
            <Navbar setTab={setTab} />
            <main className="ml-64 p-6 flex-1">
                {tab === 'home' && <Home />}
                {tab === 'about' && <About />}
                {tab === 'projects' && <Projects />}
                {tab === 'courses' && <Courses />}
                {tab === 'contact' && <Contact />}
            </main>
        </div>
    );
}
