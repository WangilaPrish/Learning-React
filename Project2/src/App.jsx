import React from 'react'
import Weather from './components/Weather.jsx';
import UserStatus from './components/UserStatus.jsx';
import Greeting from './components/Greeting.jsx';


const App = () => {
    return (
        <div>
            <Weather />
            <UserStatus loggedIn={true} isAdmin={false} />
            <Greeting timeOfDay="morning"/>
        </div>
    );
};

export default App;
