// src/components/QuizList.js
import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../api';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Available Quizzes</h2>
      {quizzes.length > 0 ? (
        <ul className="bg-white shadow-md rounded-lg overflow-hidden">
          {quizzes.map((quiz, index) => (
            <li 
              key={quiz._id} 
              className={`border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition duration-150 ease-in-out ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-700">{quiz.title}</span>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                    Take Quiz
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-4">No quizzes available at the moment.</p>
      )}
    </div>
  );
};

export default QuizList;