export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-4 rounded shadow">
                    <div className="h-48 bg-gray-300 mb-4 flex items-center justify-center">400 x 300</div>
                    <h3 className="font-bold">Amazing Card</h3>
                    <p>This is a cool-looking card component using React and Tailwind CSS.</p>
                    <button className="mt-2 text-blue-500">Learn More</button>
                </div>
            ))}
        </div>
    );
}
