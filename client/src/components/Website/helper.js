import React from 'react';
import Loading from './Loading';
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setCurrentUser(window.localStorage.getItem('token'));
    }
    setPending(false);
  }, []);

  if (pending) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
