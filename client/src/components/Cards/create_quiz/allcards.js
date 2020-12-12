import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Card from './card.js';
import axios from 'axios';

const premadeQuestions = [
  { question: 'Why do I...?', answer: ['a', 'b', 'c', 'd'] },
  { question: 'Where was my best vacation?', answer: ['e', 'f', 'g', 'h'] },
  { question: 'What was the name of my favorite stuffed animal?', answer: ['i', 'j', 'k', 'l'] },
  { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'What is my favorite color', answer: ['m', 'n', 'o', 'p'] },
  { question: 'What sport do I like watching the best?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'What is my middle name?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'What is my favorite drink?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'What was my craziest night?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'What is my favorite subject?', answer: ['History', 'Computer Science', 'English', 'Biology'] },
];

// let questions = {
//   1: {question: 'Why do I...?', answer: ['a', 'b', 'c', 'd'] },
//   2: {question: 'Where was my best vacation?', answer: ['e', 'f', 'g', 'h'] },
//   3: {question: 'What was the name of my favorite stuffed animal?', answer: ['i', 'j', 'k', 'l'] },
//   4: { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
//   5: { question: 'What is my favorite color', answer: ['m', 'n', 'o', 'p'] },
//   6: { question: 'What sport do I like watching the best?', answer: ['m', 'n', 'o', 'p'] },
//   7: { question: 'What is my middle name?', answer: ['m', 'n', 'o', 'p'] },
//   8: { question: 'What is my favorite drink?', answer: ['m', 'n', 'o', 'p'] },
//   9: { question: 'What was my craziest night?', answer: ['m', 'n', 'o', 'p'] },
//   10: { question: 'What is my favorite subject?', answer: ['History', 'Computer Science', 'English', 'Biology'] }
// }

function AllCards() {
  const history = useHistory();
  const location = useLocation();

  const [name, setName] = useState("")
  const [quizInfo, setQuizInfo] = useState([]);

  useEffect(() => {
    console.log(location.state.name)
    setName(location.state.name)
  }, [location])

  console.log('WHATS IN NAME', name)

  console.log('HERES ALL THE QUIZ INFO', quizInfo);

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    console.log('QUIZ INFOOOOOO', quizInfo);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ quizInfo: quizInfo, userName: name });
      const res = await axios.post('/api/invite', body, config);
      console.log('wHAT IS THE DATA', res.data);
      history.push({pathname: '/invite', state: {roomCode: res.data.roomCode}});
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Form onSubmit={handleQuestionSubmit} className="mt-5 mb-5">
      <h1 className="d-flex justify-content-center mb-3 quiz-header">Ask away, {name}! </h1>
      {[
        '#FF9AA2',
        '#FFB7B2',
        '#FFB347',
        '#FFDAC1',
        '#B5EAD7',
        '#E2F0CB',
        '#85E3FF',
        '#ACE7FF',
        '#B28DFF',
        '#97A2FF',
      ].map((cardColor, i) => (
        <Card
          key={cardColor}
          questionNumber={i + 1}
          cardColor={cardColor}
          defaultQ={premadeQuestions[i].question}
          defaultA={premadeQuestions[i].answer}
          premadeQuestions={premadeQuestions}
          quizInfo={quizInfo}
          setQuizInfo={setQuizInfo}
        ></Card>
      ))}
      <div className='d-flex justify-content-center'>
        <button type='submit' className='btn btn-secondary'>
          Create my quiz!
        </button>
      </div>
    </Form>
  );
}

export default AllCards;


//    // {
    //   number: 1,
    //   question: '',
    //   correctAnswer: "",
    //   answer: '',
    //   bgColor: '',
    //   answerOptions: '',
    // },     {
    //     number: 2,
    //     question: '',
    //     correctAnswer: "",
    //     answer: '',
    //     bgColor: '',
    //     answerOptions: '',
    //   }


