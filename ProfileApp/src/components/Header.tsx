const Header = () => (
    <div className="relative w-full h-[250px] bg-gray-300">
        <div className="absolute bottom-[-40px] left-8 flex items-center">
            <div className="w-24 h-24 rounded-full bg-gray-400 border-4 border-white"></div>
            <div className="ml-4">
                <h1 className="text-2xl font-bold">HuXn WebDev</h1>
                <p>1M views</p>
                <p>This is a short description of the YouTube channel.</p>
                <button className="btn btn-error btn-sm mt-2">Subscribe</button>
            </div>
        </div>
    </div>
);

export default Header;
