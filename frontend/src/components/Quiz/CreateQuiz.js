import React, { useState, useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const CreateQuiz = ({ history }) => {
    const { createQuiz } = useContext(QuizContext);
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);

    const addQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }]);
    };

    const handleQuestionChange = (index, field, value) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (qIndex, oIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = value;
        setQuestions(newQuestions);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await createQuiz({ title, questions });
        history.push('/quizzes');
    };

    return (
        <form onSubmit={submitHandler}>
            <h2>Create Quiz</h2>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            {questions.map((q, qIndex) => (
                <div key={qIndex}>
                    <label>Question {qIndex + 1}</label>
                    <input
                        type="text"
                        value={q.question}
                        onChange={(e) => handleQuestionChange(qIndex, 'question', e.target.value)}
                    />
                    {q.options.map((option, oIndex) => (
                        <div key={oIndex}>
                            <label>Option {oIndex + 1}</label>
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                            />
                        </div>
                    ))}
                    <label>Correct Answer</label>
                    <input
                        type="text"
                        value={q.correctAnswer}
                        onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                    />
                </div>
            ))}
            <button type="button" onClick={addQuestion}>Add Question</button>
            <button type="submit">Create Quiz</button>
        </form>
    );
};

export default CreateQuiz;
