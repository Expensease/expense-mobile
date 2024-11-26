import {createContext, PropsWithChildren, useState} from 'react';

export const AuthContext = createContext({});

export const AuthContextWrapper = ({children}: PropsWithChildren) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: {
      id: 100,
      name: 'Ravi Singh',
      email: 'ravi@gmail.com',
    },
  });

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
