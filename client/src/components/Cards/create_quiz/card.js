import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import './card.css';
import AnsOption from './answer/ansOption';
import AddAnswer from './answer/addAns';
import Question from './question/question';
import QuestionDropdown from './question/questionDropdown';

function Card({
  quizInfo,
  setQuizInfo,
  question,
  ansOptions,
  bgColor,
  cardNumber,
  correctAnswer
}) {

  const [customQ, setCustomQ] = useState(false);

  const colors = [
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
  ];

  const changeCardColor = (color) => {
    setQuizInfo({
      ...quizInfo,
      [cardNumber]: { ...quizInfo[cardNumber], bgColor: color },
    });
  };

  return (
    <Row className='mb-5'>
      <Col>
        <div
          className='card'
          style={{ backgroundColor: bgColor }}
        >
          <div className='card-content'>
            {/* Question Components */}
            <div className='question mb-2'>
              <h2>QUESTION {cardNumber}</h2>
              {/* Question input field */}
              <Question   
                quizInfo={quizInfo}
                setQuizInfo={setQuizInfo}
                customQ={customQ}
                question={question}
                cardNumber={cardNumber}
              />
              {/* Additional Question Options/Dropdown */}
              <QuestionDropdown 
                quizInfo={quizInfo}
                setCustomQ={setCustomQ}
                setQuizInfo={setQuizInfo}
                cardNumber={cardNumber}
              />
            </div>
            <div>
              <Form>
              {Object.keys(ansOptions).map((num, idx) => (
                <AnsOption
                  key={num}
                  ansChoice={ansOptions[num]}
                  ansOptions={ansOptions}
                  ansNum={num} 
                  idx={idx}
                  cardNumber={cardNumber}
                  quizInfo={quizInfo}
                  setQuizInfo={setQuizInfo}
                />
              ))}
              </Form>
              {Object.keys(ansOptions).length < 6 ? (
                <AddAnswer 
                  cardNumber={cardNumber}
                  quizInfo={quizInfo}
                  setQuizInfo={setQuizInfo}
                  ansOptions={ansOptions}
                />
              ) : null}
            </div>

            {/* Change card background color */}
            <div className='mt-2 d-flex justify-content-center'>
              {colors.map((color) => (
                <div key={color}
                  className='btn pick-a-color mr-1'
                  style={{ backgroundColor: color }}
                  onClick={() => changeCardColor(color)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Card;
