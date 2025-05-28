import React, { useState } from "react";
import Header from "../Header";
import PostCard from "../PostCard";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";

const posts = [
    {
        id: 1,
        title: "Why You Should Learn TypeScript in 2025",
        excerpt:
            "TypeScript has become the go-to language for writing safe and scalable frontend code. Here's why it's worth learning this year.",
        fullText:
            "TypeScript is more than just JavaScript with types — it's a developer’s safety net. With TypeScript, you catch errors during development instead of in production. In large projects, it provides powerful tooling for autocomplete, navigation, and refactoring. Frameworks like Next.js, Angular, and even backend tools like NestJS have made TypeScript their default. In 2025, TypeScript is no longer a nice-to-have — it's an industry standard.",
    },
    {
        id: 2,
        title: "The Power of Tailwind CSS for Rapid UI Development",
        excerpt:
            "Tailwind CSS is revolutionizing how developers style applications. Learn how utility-first CSS helps you move fast without compromising design.",
        fullText:
            "Tailwind CSS allows you to build modern UIs with speed and flexibility. Instead of writing custom CSS, you apply utility classes directly in your JSX. This approach eliminates context switching and reduces stylesheet bloat. It's fully responsive out of the box and integrates seamlessly with design systems. If you're building with React, Vue, or even plain HTML, Tailwind is a game-changer for productivity.",
    },
    {
        id: 3,
        title: "React vs. Next.js: What Should You Use?",
        excerpt:
            "Choosing between React and Next.js? Here’s a breakdown of what each offers and when to use them.",
        fullText:
            "React is a UI library, while Next.js is a framework built on top of React that adds server-side rendering, routing, and API routes out of the box. If you’re building a single-page app (SPA), React is enough. But for SEO-friendly apps, blogs, eCommerce, or dashboards, Next.js offers built-in performance optimization and routing. In 2025, most production React apps are better off being built with Next.js.",
    },
];

export default function BlogHome() {
    const [activePost, setActivePost] = useState<number | null>(null);

    const closePost = () => setActivePost(null);

    return (
        <main className="min-h-screen bg-sky-50 text-gray-800 font-serif">
            <Header />

            <section className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>

                {activePost !== null ? (
                    <div className="bg-white shadow-lg rounded-xl p-6 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">{posts[activePost].title}</h3>
                        <p className="text-gray-700 mb-6">{posts[activePost].fullText}</p>
                        <Button onClick={closePost}>Close</Button>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                excerpt={post.excerpt}
                                fullText={post.fullText}
                                onReadMore={() => setActivePost(index)}
                            />
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
