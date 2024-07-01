import React, { createContext, useState } from 'react';
import axios from 'axios';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState([]);
    const [quiz, setQuiz] = useState(null);

    const createQuiz = async (quizData) => {
        const response = await axios.post('/api/quizzes', quizData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        setQuizzes([...quizzes, response.data]);
    };

    const getQuizzes = async () => {
        const response = await axios.get('/api/quizzes');
        setQuizzes(response.data);
    };

    const getQuiz = async (id) => {
        const response = await axios.get(`/api/quizzes/${id}`);
        setQuiz(response.data);
    };

    const submitQuiz = async (id, answers) => {
        const response = await axios.post(`/api/quizzes/${id}/take`, answers);
        return response.data.score;
    };

    return (
        <QuizContext.Provider value={{ quizzes, quiz, createQuiz, getQuizzes, getQuiz, submitQuiz }}>
            {children}
        </QuizContext.Provider>
    );
};
