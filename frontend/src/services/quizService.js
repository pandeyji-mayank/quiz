import axios from 'axios';

const createQuiz = async (quizData) => {
    const response = await axios.post('/api/quizzes', quizData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

const getQuizzes = async () => {
    const response = await axios.get('/api/quizzes');
    return response.data;
};

const getQuiz = async (id) => {
    const response = await axios.get(`/api/quizzes/${id}`);
    return response.data;
};

const submitQuiz = async (id, answers) => {
    const response = await axios.post(`/api/quizzes/${id}/take`, answers);
    return response.data;
};

export { createQuiz, getQuizzes, getQuiz, submitQuiz };
