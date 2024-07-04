// src/components/QuizTake.js
import React, { useState } from 'react';
import { takeQuiz } from '../api';

const QuizTake = ({ quiz }) => {
  const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await takeQuiz({ quizId: quiz._id, answers });
      setScore(data.score);
    } catch (error) {
      alert('Error submitting quiz');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{quiz.title}</h2>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, index) => (
          <div key={index} className="mb-8 p-4 bg-gray-50 rounded-md">
            <p className="font-semibold mb-4 text-gray-700">{index + 1}. {question.questionText}</p>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-8 flex justify-center">
          <button 
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Quiz
          </button>
        </div>
      </form>
      {score !== null && (
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold">
            Your score: <span className="text-indigo-600">{score}</span>/{quiz.questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizTake;