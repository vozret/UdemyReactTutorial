import React from 'react';

// "globally" available js object, we decide where it will be available
// without using props
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;