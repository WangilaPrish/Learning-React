import React from 'react';
import UserProfile from './components/UserProfile.jsx';
import { UserProvider } from './UserContext.jsx';
import { UserContext } from './UserContext.jsx';
import UpdateUser from './components/UpdateUser.jsx';



const App = () => {
  return (
    <UserProvider>
          <UserProfile />
          <UpdateUser />
    </UserProvider>
  );
};

export default App;
