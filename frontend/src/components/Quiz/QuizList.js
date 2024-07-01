import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { Link } from 'react-router-dom';

const QuizList = () => {
    const { quizzes, getQuizzes } = useContext(QuizContext);

    useEffect(() => {
        getQuizzes();
    }, []);

    return (
        <div>
            <h2>Quizzes</h2>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz._id}>
                        <Link to={`/quiz/${quiz._id}`}>{quiz.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizList;
