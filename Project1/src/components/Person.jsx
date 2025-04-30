const Person = () => {
    return (
        <User
            name='Prish'
            age= '22'
        />
    );
};

const User = ({ name, age }) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
        </div>
    );
};


export default Person;
