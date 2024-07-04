const express = require('express');
const { createQuiz, getQuizzes, takeQuiz } = require('../controllers/quizController');
const router = express.Router();

router.route('/').post(createQuiz);
router.route('/getQuizzes').get(getQuizzes)
router.route('/take').post(takeQuiz);

module.exports = router;
