import React, { createContext, useState } from 'react';

export const authContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "hablu mia",
        email: 'hablu@misa.com'
    })
    const authData = {
        user, 
        setUser
    }

    return <authContext value={authData}>{children}</authContext>
};

export default AuthProvider;