import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../../context/QuizContext';

const TakeQuiz = ({ match }) => {
    const { quiz, getQuiz, submitQuiz } = useContext(QuizContext);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        getQuiz(match.params.id);
    }, [match.params.id]);

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const score = await submitQuiz(match.params.id, { answers });
        alert(`You scored ${score} out of ${quiz.questions.length}`);
    };

    return (
        <div>
            <h2>{quiz?.title}</h2>
            <form onSubmit={submitHandler}>
                {quiz?.questions.map((q, qIndex) => (
                    <div key={qIndex}>
                        <label>{q.question}</label>
                        {q.options.map((option, oIndex) => (
                            <div key={oIndex}>
                                <input
                                    type="radio"
                                    name={`question-${qIndex}`}
                                    value={option}
                                    onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                                />
                                {option}
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit">Submit Quiz</button>
            </form>
        </div>
    );
};

export default TakeQuiz;
