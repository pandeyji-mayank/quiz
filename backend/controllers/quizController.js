const Quiz = require('../models/Quiz');

const createQuiz = async (req, res) => {
    const { title, questions } = req.body;

    try {
        const quiz = new Quiz({ title, questions, user: req.user.id });
        await quiz.save();
        res.status(201).json(quiz);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const takeQuiz = async (req, res) => {
    const { answers } = req.body;
    try {
        const quiz = await Quiz.findById(req.params.id);
        const score = quiz.questions.reduce((score, question, index) => {
            return question.correctAnswer === answers[index] ? score + 1 : score;
        }, 0);
        res.json({ score, total: quiz.questions.length });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createQuiz, getQuizzes, takeQuiz };
