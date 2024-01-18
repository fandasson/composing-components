import React, { useState, createContext, useContext } from "react";

// Creating the context
const AuthContext = createContext();

// Custom hook for using context easily
const useAuthContext = () => {
    return useContext(AuthContext);
};

// Provider Component
const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = (userData) => {
        // Perform login logic and set user data
        setCurrentUser(userData);
    };

    const logout = () => {
        // Perform logout logic
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthContext };
