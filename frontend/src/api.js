// src/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const register = (data) => api.post('/users/register', data);
export const login = (data) => api.post('/users/login', data);
export const createQuiz = (data) => api.post('/quizzes', data);
export const getQuizzes = () => api.get('/quizzes/getQuizzes');
export const takeQuiz = (data) => api.post('/quizzes/take', data);
