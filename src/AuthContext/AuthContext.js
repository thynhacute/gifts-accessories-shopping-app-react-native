import React, { createContext, useState } from "react";

const AuthContext = createContext({
  loggedInAccountId: null,
  setLoggedInAccountId: () => {},
});

export const AuthProvider = ({ children }) => {
  const [loggedInAccountId, setLoggedInAccountId] = useState(null);

  return (
    <AuthContext.Provider value={{ loggedInAccountId, setLoggedInAccountId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
