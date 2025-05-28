import Card from '../components/Card';

const Courses = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 p-4">
        {[...Array(4)].map((_, i) => (
            <Card key={i} title="Course Card" description="This is a cool-looking course card using React and Tailwind CSS." />
        ))}
    </div>
);

export default Courses;
