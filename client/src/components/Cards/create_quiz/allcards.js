import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Card from './card.js';
import axios from 'axios';
// import premadeCards from './premadeCards.js'
import { UseQuiz, SetQuiz } from './QuizContext';

function AllCards() {
  const history = useHistory();
  const location = useLocation();

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const quizInfo = UseQuiz();

  useEffect(() => {
    setName(location.state.name);
  }, [location]);

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

      localStorage.setItem('roomCode', JSON.stringify(res.data.roomCode))
      localStorage.setItem('pin', JSON.stringify(res.data.pin))

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

  console.log('HERES ALL THE QUIZ INFO', quizInfo);

  return (
    <Form onSubmit={handleQuestionSubmit} className='mt-5 mb-5'>
      <h1 className='d-flex justify-content-center mb-3 quiz-header'>
        Ask away, {name}!
      </h1>
      {Object.keys(quizInfo).map((cardNum) => (
        <Card key={quizInfo[cardNum].number} cardNumber={cardNum}></Card>
      ))}

      <div className='text-center'>
        <button type='submit' className='btn btn-secondary'>
          Create my quiz!
        </button>
        <p className='text-danger mt-3'>{error}</p>
      </div>
    </Form>
  );
}

export default AllCards;

