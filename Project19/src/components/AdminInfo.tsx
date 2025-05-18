import React from "react";
import type { AdminInfoList } from "./types";

const AdminInfo: React.FC<AdminInfoList> = ({ id, name, email, role, permissions }) => {
    return (
        <div>
            <h3>Admin Info:</h3>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <p>Permissions: {permissions.join(", ")}</p>
        </div>
    );
};

export default AdminInfo;
