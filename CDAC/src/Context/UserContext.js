import React, { createContext, useContext, useState } from "react";

// Create User Context
const UserContext = createContext();

// Custom hook to use User Context
export const useUser = () => useContext(UserContext);

// UserProvider Component (Wrap this around your app)
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores logged-in user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
