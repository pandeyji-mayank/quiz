import axios from 'axios';

const register = async (userData) => {
    const response = await axios.post('/api/users/register', userData);
    localStorage.setItem('token', response.data.token);
    return response.data;
};

const login = async (userData) => {
    const response = await axios.post('/api/users/login', userData);
    localStorage.setItem('token', response.data.token);
    return response.data;
};

export { register, login };
