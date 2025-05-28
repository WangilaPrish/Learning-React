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
    {
        id: 4,
        title: "The Case for Component-Driven Development",
        excerpt:
            "Component-driven development breaks down the UI into reusable pieces. It’s the backbone of modern frontend architecture.",
        fullText:
            "Component-driven development (CDD) treats every element of your UI as an isolated, testable component. This approach enables faster iteration, easier debugging, and a more maintainable codebase. Tools like Storybook and design systems like Radix or ShadCN are built around this principle. CDD isn’t just a frontend fad — it's the foundation of scalable React apps.",
    },
    {
        id: 5,
        title: "Using GitHub Actions for CI/CD in React Projects",
        excerpt:
            "CI/CD automation improves your workflow. Learn how GitHub Actions can streamline deployment of React apps.",
        fullText:
            "GitHub Actions allows you to automate your build, test, and deployment pipelines directly from your repository. For React apps, you can automatically lint and test your code on every push, then deploy to services like Vercel, Netlify, or even a VPS using SSH. It's secure, fast, and helps enforce consistent deployment practices across teams.",
    },
    {
        id: 6,
        title: "Understanding useEffect and useLayoutEffect in React",
        excerpt:
            "Confused about when to use useEffect vs useLayoutEffect? Here's what you need to know.",
        fullText:
            "useEffect and useLayoutEffect are two powerful hooks in React that run after component render. The key difference: useLayoutEffect runs synchronously after all DOM mutations, blocking paint, while useEffect runs asynchronously. If you need to measure layout or make visual changes before paint, useLayoutEffect. For data fetching or subscriptions, useEffect is preferred.",
    }
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
