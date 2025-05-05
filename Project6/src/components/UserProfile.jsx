import React, { useContext } from 'react';
import { UserContext } from '../UserContext.jsx';

const UserProfile = () => {
    const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Hello, {user.name}!</p>
    </div>
  );
};

export default UserProfile;
