import React from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [pending, setPending] = React.useState(true);

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            setCurrentUser(user)
            setPending(false)
        }
    }, [localStorage.key(0)]);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};