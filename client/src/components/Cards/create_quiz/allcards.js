import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Card from './card.js';
import axios from 'axios';

const premadeCards = {
  1: {
    number: 1,
    bgColor: '#FF9AA2',
    question: 'Why do I...?',
    correctAnswer: '',
    ansOptions: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' },
  },
  2: {
    number: 2,
    bgColor: '#FFB7B2',
    question: 'Where was my best vacation?',
    correctAnswer: '',
    ansOptions: { 1: 'e', 2: 'f', 3: 'g', 4: 'h' },
  },
  3: {
    number: 3,
    bgColor: '#FFB347',
    question: 'What was the name of my favorite stuffed animal?',
    correctAnswer: '',
    ansOptions: { 1: 'i', 2: 'j', 3: 'k', 4: 'l' },
  },
  4: {
    number: 4,
    bgColor: '#FFDAC1',
    question: 'Where was my childhood home?',
    correctAnswer: '',
    ansOptions: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' },
  },
  5: {
    number: 5,
    bgColor: '#B5EAD7',
    question: 'What is my favorite color',
    correctAnswer: '',
    ansOptions: { 1: 'e', 2: 'f', 3: 'g', 4: 'h' },
  },
  6: {
    number: 6,
    bgColor: '#E2F0CB',
    question: 'What sport do I like watching the best?',
    correctAnswer: '',
    ansOptions: { 1: 'i', 2: 'j', 3: 'k', 4: 'l' },
  },
  7: {
    number: 7,
    bgColor: '#85E3FF',
    question: 'What is my middle name?',
    correctAnswer: '',
    ansOptions: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' },
  },
  8: {
    number: 8,
    bgColor: '#ACE7FF',
    question: 'What is my favorite drink?',
    correctAnswer: '',
    ansOptions: { 1: 'e', 2: 'f', 3: 'g', 4: 'h' },
  },
  9: {
    number: 9,
    bgColor: '#B28DFF',
    question: 'What was my craziest night?',
    correctAnswer: '',
    ansOptions: { 1: 'i', 2: 'j', 3: 'k', 4: 'l' },
  },
  10: {
    number: 10,
    bgColor: '#97A2FF',
    question: 'What is my favorite subject?',
    correctAnswer: '',
    ansOptions: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' },
  },
};

function AllCards() {
  const history = useHistory();
  const location = useLocation();

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [quizInfo, setQuizInfo] = useState(premadeCards);

  useEffect(() => {
    setName(location.state.name);
  }, [location]);

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

      history.push({
        pathname: '/invite',
        state: { roomCode: res.data.roomCode, pin: res.data.pin },
      });

    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } 
    }
  };

  return (
    <Form onSubmit={handleQuestionSubmit} className='mt-5 mb-5'>
      <h1 className='d-flex justify-content-center mb-3 quiz-header'>
        Ask away, {name}!{' '}
      </h1>
      {Object.keys(quizInfo).map((cardNum, i) => (
        <Card
          key={cardNum}
          cardNumber={cardNum}
          cardColor={premadeCards[cardNum].bgColor}
          defaultQ={premadeCards[cardNum].question}
          defaultA={premadeCards[cardNum].ansOptions}
          quizInfo={quizInfo}
          setQuizInfo={setQuizInfo}
        ></Card>
      ))}
 
      <div className="text-center">
        <button type='submit' className='btn btn-secondary'>
          Create my quiz!
        </button>
        <p className="text-danger mt-3">{error}</p>
      </div>

    </Form>
  );
}

export default AllCards;

{
  /* {premadeCards.map((card, i) => (
        <Card
          key={premadeCards[i].number}
          questionNumber={i + 1}
          cardColor={premadeCards[i].bgColor}
          defaultQ={premadeCards[i].question}
          defaultA={premadeCards[i].ansOptions}
          quizInfo={quizInfo}
          setQuizInfo={setQuizInfo}
        ></Card>
      ))} */
}

// const premadeCards = {
//   1: { number: 1, bgColor: "#FF9AA2", question: 'Why do I...?', correctAnswer: "", ansOptions: ['a', 'b', 'c', 'd'] },
//   2: { number: 2, bgColor: "#FFB7B2", question: 'Where was my best vacation?', correctAnswer: "", ansOptions: ['e', 'f', 'g', 'h'] },
//   3: { number: 3, bgColor: "#FFB347", question: 'What was the name of my favorite stuffed animal?', correctAnswer: "", ansOptions: ['i', 'j', 'k', 'l'] },
//   4: { number: 4, bgColor: "#FFDAC1", question: 'Where was my childhood home?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   5: { number: 5, bgColor: "#B5EAD7", question: 'What is my favorite color', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   6: { number: 6, bgColor: "#E2F0CB", question: 'What sport do I like watching the best?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   7: { number: 7, bgColor: "#85E3FF", question: 'What is my middle name?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   8: { number: 8, bgColor: "#ACE7FF", question: 'What is my favorite drink?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   9: { number: 9, bgColor: "#B28DFF", question: 'What was my craziest night?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   10: { number: 10, bgColor: "#97A2FF", question: 'What is my favorite subject?', correctAnswer: "", ansOptions: ['History', 'Computer Science', 'English', 'Biology'] },
// };

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

// const premadeCards = [
//   { number: 1, bgColor: "#FF9AA2", question: 'Why do I...?', correctAnswer: "", ansOptions: ['a', 'b', 'c', 'd'] },
//   { number: 2, bgColor: "#FFB7B2", question: 'Where was my best vacation?', correctAnswer: "", ansOptions: ['e', 'f', 'g', 'h'] },
//   { number: 3, bgColor: "#FFB347", question: 'What was the name of my favorite stuffed animal?', correctAnswer: "", ansOptions: ['i', 'j', 'k', 'l'] },
//   { number: 4, bgColor: "#FFDAC1", question: 'Where was my childhood home?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   { number: 5, bgColor: "#B5EAD7", question: 'What is my favorite color', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   { number: 6, bgColor: "#E2F0CB", question: 'What sport do I like watching the best?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   { number: 7, bgColor: "#85E3FF", question: 'What is my middle name?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   { number: 8, bgColor: "#ACE7FF", question: 'What is my favorite drink?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   { number: 9, bgColor: "#B28DFF", question: 'What was my craziest night?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
//   { number: 10, bgColor: "#97A2FF", question: 'What is my favorite subject?', correctAnswer: "", ansOptions: ['History', 'Computer Science', 'English', 'Biology'] },
// ];
