import FlipCard from '../components/FlippingCard'; // adjust the import path as needed

interface AppProps {
    title: string;
}

const App = ({ title }: AppProps) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-xl mb-4">{title}</h1>
            <FlipCard
                frontContent={<div>Front Side</div>}
                backContent={<div>Back Side</div>}
                variant="primary"
            />
        </div>
    );
};


export default App;
