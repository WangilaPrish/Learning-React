const Person = () => {
    return (
        <Pep 
        user="Prish" 
        age="23" 
        />
    );
};

const Pep = ({ user, age }) => {
    return (
        <div>
            <h1>Name: {user}</h1>
            <p>Age: {age}</p>
        </div>
    );
};

export default Person;