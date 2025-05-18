import type { Info } from './types'
import type { FC } from 'react';

const AdminInfo: FC<Info> = ({ name, email, id }) => {
    return (
        <div>
            <h1>Admin Info</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>ID: {id}</p>
        </div>
    )
}

export default AdminInfo
