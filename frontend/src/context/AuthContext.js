import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (userData) => {
        const response = await axios.post('/api/users/register', userData);
        setUser(response.data);
    };

    const login = async (userData) => {
        const response = await axios.post('/api/users/login', userData);
        setUser(response.data);
    };

    return (
        <AuthContext.Provider value={{ user, register, login }}>
            {children}
        </AuthContext.Provider>
    );
};
