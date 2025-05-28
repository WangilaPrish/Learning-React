import Card from '../components/Card';

const Projects = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 p-4">
        {[...Array(6)].map((_, i) => (
            <Card key={i} title="Amazing Card" description="This is a cool-looking card component using React and Tailwind CSS." />
        ))}
    </div>
);

export default Projects;
