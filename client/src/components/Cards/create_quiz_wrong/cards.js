import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Card from './card.js';
import axios from 'axios';



const premadeCards = [
    { number: 1, bgColor: "#FF9AA2", question: 'Why do I...?', correctAnswer: "", ansOptions: ['a', 'b', 'c', 'd'] },
    { number: 2, bgColor: "#FFB7B2", question: 'Where was my best vacation?', correctAnswer: "", ansOptions: ['e', 'f', 'g', 'h'] },
    { number: 3, bgColor: "#FFB347", question: 'What was the name of my favorite stuffed animal?', correctAnswer: "", ansOptions: ['i', 'j', 'k', 'l'] },
    { number: 4, bgColor: "#FFDAC1", question: 'Where was my childhood home?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
    { number: 5, bgColor: "#B5EAD7", question: 'What is my favorite color', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
    { number: 6, bgColor: "#E2F0CB", question: 'What sport do I like watching the best?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
    { number: 7, bgColor: "#85E3FF", question: 'What is my middle name?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
    { number: 8, bgColor: "#ACE7FF", question: 'What is my favorite drink?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
    { number: 9, bgColor: "#B28DFF", question: 'What was my craziest night?', correctAnswer: "", ansOptions: ['m', 'n', 'o', 'p'] },
    { number: 10, bgColor: "#97A2FF", question: 'What is my favorite subject?', correctAnswer: "", ansOptions: ['History', 'Computer Science', 'English', 'Biology'] },
  ];
  
  
  function AllCards() {
    const history = useHistory();
    const location = useLocation();
  
    const [name, setName] = useState("")
    const [quizInfo, setQuizInfo] = useState(premadeCards);
  
    useEffect(() => {
      setName(location.state.name)
    }, [location])
  
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
        {quizInfo.map((card, i) => (
          <Card
            key={card.number}
            cardNumber={i + 1}
            card={card}
            setQuizInfo={setQuizInfo}
            quizInfo={quizInfo}
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
  ///




  import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './card.css';
import AnsOption from './answer/ansOption';
import AddAnswer from './answer/addAns';
import Question from './question/question';
import QuestionDropdown from './question/questionDropdown';

function Card({ card, cardNumber, setQuizInfo, quizInfo }) {

  const colors = ['#FF9AA2', '#FFB7B2', '#FFB347', '#FFDAC1', '#B5EAD7', '#E2F0CB', '#85E3FF',
    '#ACE7FF', '#B28DFF', '#97A2FF']

  const changeCardColor = (color) => {

    let updateBgColor = quizInfo.map((card, i) => {
      if (i + 1 == cardNumber) {
        return { ...card, bgColor: color };
      } else {
        return card;
      }
    });
    setQuizInfo(updateBgColor);
  };

  return (
    <Row key={cardNumber} className='mb-5'>
      <Col>
        <div className='card' style={{ backgroundColor: card.bgColor }}>
          <div className='card-content'>
            <h2 className='font-weight-bold'>QUESTION {cardNumber}</h2>
            {/* Question Components */}
            <div className='question mb-2'>
              {/* Question input field */}
              <Question question={card.question} setQuizInfo={setQuizInfo} />
              {/* Additional Question Options/Dropdown */}
              <QuestionDropdown quizInfo={quizInfo} setQuizInfo={setQuizInfo} cardNumber={cardNumber} />
            </div>

            {/* Answer Components */}
            <div>
              {/* Answer Options */}
              {card.ansOptions.map((ansOption) => (
                <AnsOption key={ansOption} ansOption={ansOption} setQuizInfo={setQuizInfo} quizInfo={quizInfo} cardNumber={cardNumber}/>
              ))}
              {/* Add Answer Option */}
              {card.ansOptions.length < 6 ? (
                <AddAnswer setQuizInfo={setQuizInfo} quizInfo={quizInfo} cardNumber={cardNumber}/>                
              ) : null}
            </div>
            {/* Change bg color */}
            {colors.map((color) => (
              <div
                className='btn pick-a-color mr-1'
                style={{ backgroundColor: color }}
                onClick={() => changeCardColor(color)}
              ></div>
          ))}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Card;