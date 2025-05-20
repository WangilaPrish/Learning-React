import { useState, useEffect } from "react";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
};

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data: User[]) => setUsers(data))
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>
                        <h2>{u.name}</h2>
                        <p>Username: {u.username}</p>
                        <p>Email: {u.email}</p>
                        <p>Phone: {u.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
