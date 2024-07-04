const Quiz = require('../models/Quiz');
const errorHandler = require('../utils/errorHandler');

exports.createQuiz = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const quiz = new Quiz({ title, questions });
    await quiz.save();
    res.status(201).json({ success: true, data: quiz });
  } catch (err) {
    errorHandler(err, res);
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json({ success: true, data: quizzes });
  } catch (err) {
    errorHandler(err, res);
  }
};

exports.takeQuiz = async (req, res) => {
  const { quizId, answers } = req.body;
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ success: false, message: 'Quiz not found' });
    }
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score += 1;
      }
    });
    res.status(200).json({ success: true, score });
  } catch (err) {
    errorHandler(err, res);
  }
};
