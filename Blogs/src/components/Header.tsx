import React from "react";

export default function Header() {
    return (
        <header className="bg-sky-600 text-white py-6 shadow-md">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold">Skyline Blog</h1>
                <p className="text-sm">Sharing stories, ideas, and knowledge</p>
            </div>
        </header>
    );
}
