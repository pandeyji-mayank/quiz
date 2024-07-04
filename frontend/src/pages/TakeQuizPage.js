// src/pages/TakeQuizPage.js
import React, { useState, useEffect } from 'react';
import { getQuizzes } from '../api';
import QuizTake from '../components/QuizTake';

const TakeQuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const { data } = await getQuizzes();
        setQuizzes(data.data);
      } catch (error) {
        alert('Error fetching quizzes');
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Take Quiz</h2>
      {selectedQuiz ? (
        <QuizTake quiz={selectedQuiz} />
      ) : (
        <div className="max-w-2xl mx-auto">
          <ul className="bg-white shadow-md rounded-lg overflow-hidden">
            {quizzes.map((quiz) => (
              <li 
                key={quiz._id} 
                onClick={() => setSelectedQuiz(quiz)}
                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-700">{quiz.title}</span>
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {quizzes.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No quizzes available at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TakeQuizPage;