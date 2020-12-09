import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from './card.js';
import axios from 'axios';

const premadeQuestions = [
  { question: 'What is my favorite drink?', answer: ['a', 'b', 'c', 'd'] },
  { question: 'Where was my best vacation?', answer: ['e', 'f', 'g', 'h'] },
  {
    question: 'What was the name of my favorite stuffed animal?',
    answer: ['i', 'j', 'k', 'l'],
  },
  { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
  { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
];

function AllCards() {
  let history = useHistory();
  const [allQuizAns, setAllQuizAns] = useState([]);
  const [quizInfo, setQuizInfo] = useState([
    // {
    //   number: 1,
    //   question: '',
    //   answer: '',
    //   bgColor: '',
    //   answerOptions: '',
    // },     {
    //     number: 2,
    //     question: '',
    //     answer: '',
    //     bgColor: '',
    //     answerOptions: '',
    //   }
  ]);

  console.log('HERES ALL THE QUIZ INFO', quizInfo);

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    console.log('need to also send all the background colors?');
    console.log('ALL ANSWERS ARRAY', allQuizAns);
    console.log('QUIZ INFOOOOOO', quizInfo);
    history.push('/invite');

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ quizInfo: quizInfo, userName: 'testuser' });

      const res = await axios.post('/api/invite', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }

    // fetch('/api/invite', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         quizInfo: "Test"
    //     })
    // })
    // .then(res =>res.json())
    // .then(data => console.log('WHATS IN DATA', data))
    // .catch((error) => {
    //     console.error('Error:', error)})
  };

  console.log('all quiz ansawers', allQuizAns);

  return (
    <Form onSubmit={handleQuestionSubmit}>
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
          allQuizAns={allQuizAns}
          setAllQuizAns={setAllQuizAns}
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
