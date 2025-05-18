import type { FC } from 'react';
import type { Info } from './types';


const UserInfo: FC<Info> = ({ name, email, id }) => {
    return (
        <div>
            <h1>User Info</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>ID: {id}</p>
        </div>
    );
};

export default UserInfo;
