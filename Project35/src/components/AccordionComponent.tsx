// Accordion.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const data = [
    { title: 'What is React?', content: 'React is a JS library for building UIs.' },
    { title: 'What is Framer Motion?', content: 'It is a motion library for React.' },
    { title: 'What is Tailwind CSS?', content: 'A utility-first CSS framework for rapid UI development.' },
    { title: 'What is Vite?', content: 'A fast build tool and development server for modern web projects.' },
    { title: 'What is TypeScript?', content: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
    { title: 'What is Next.js?', content: 'A React framework for building server-side rendered applications.' },
    { title: 'What is Redux?', content: 'A predictable state container for JavaScript apps.' },
    { title: 'What is GraphQL?', content: 'A query language for APIs and a runtime for executing those queries.' },
    { title: 'What is Node.js?', content: 'A JavaScript runtime built on Chrome\'s V8 engine.' },
    { title: 'What is Express?', content: 'A minimal and flexible Node.js web application framework.' },
    { title: 'What is MongoDB?', content: 'A NoSQL database that uses a document-oriented data model.' },
    { title: 'What is PostgreSQL?', content: 'A powerful, open source object-relational database system.' },
];

interface AccordionItemProps {
    title: string;
    content: string;
}
const AccordionItem = ({ title, content }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openAccordion = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="border-b border-gray-300">
            <button
                className="w-full text-left px-4 py-3 font-semibold text-lg hover:bg-gray-100 transition"
                onClick={openAccordion}
            >
                {title}
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden px-4 text-gray-700"
                    >
                        <div className="py-2">{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = () => {
    return (
        <div className="max-w-md mx-auto mt-10 shadow-md rounded-lg border border-gray-200">
            {data.map((item, idx) => (
                <AccordionItem key={idx} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;
