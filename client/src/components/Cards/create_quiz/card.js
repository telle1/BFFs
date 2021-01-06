import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import './card.css';
import AnsOption from './answer/ansOption';
import AddAnswer from './answer/addAns';
import Question from './question/question';
import QuestionDropdown from './question/questionDropdown';
import BgColor from './bgColor';
import { UseQuiz } from './QuizContext';

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

function Card({ cardNumber }) {
  
  const [customQ, setCustomQ] = useState(false);
  const quizInfo = UseQuiz();
  const bgColor = quizInfo[cardNumber].bgColor;
  const ansOptions = quizInfo[cardNumber].ansOptions;

  return (
    <Row className='mb-5'>
      <Col>
        <div className='card' style={{ backgroundColor: bgColor }}>
          <div className='card-content'>
            {/* Question Components */}
            <div className='question mb-2'>
              <h2>QUESTION {cardNumber}</h2>
              {/* Question input field */}
              <Question cardNumber={cardNumber} customQ={customQ} />
              {/* Additional Question Options/Dropdown */}
              <QuestionDropdown
                setCustomQ={setCustomQ}
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
                  />
                ))}
              </Form>
              {Object.keys(ansOptions).length < 6 ? (
                <AddAnswer cardNumber={cardNumber} />
              ) : null}
            </div>

            {/* Change card background color */}
            <div className='mt-2 d-flex justify-content-center'>
              {colors.map((color) => (
                <BgColor key={color} cardNumber={cardNumber} color={color} />
              ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Card;
