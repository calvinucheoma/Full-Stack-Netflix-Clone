import React, {useContext, useState} from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser,}}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuthValue = () => {
    return useContext(AuthContext);
};

export default AuthProvider;