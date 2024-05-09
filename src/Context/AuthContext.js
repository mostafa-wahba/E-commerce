import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        const userToken = cookies.get('userToken');
        if (userToken) {
            setToken(userToken);
            decodeToken(userToken); // Assume decodeToken is a function you will implement
        }
    }, []);

    const decodeToken = (token) => {
        // Example function to decode token and set user data
        // This would depend on the structure of your token and what data it contains
        const decoded = jwtDecode(token); // using jwt-decode library
        setUser(decoded);
    };

    const login = async (email, password) => {
        try {
            const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', { email, password });
            if (data.message === 'success') {
                cookies.set('userToken', data.token, { path: '/' });
                setToken(data.token);
                decodeToken(data.token);
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logout = () => {
        console.log(user);
        cookies.remove('userToken', { path: '/' });
        setToken(null);
        setUser(null);
        navigate('/login');
    };

    const register = async (values) => {
        try {
            const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
            if (data.message === 'success') {
                navigate('/login');
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const value = {
        user,
        token,
        login,
        logout,
        register,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
