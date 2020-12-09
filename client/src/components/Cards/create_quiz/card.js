import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './card.css';
import AnsOption from './answer/ansOption';
import AddAnswer from './answer/addAns';
import Question from './question/question';
import QuestionDropdown from './question/questionDropdown';

function Card({
  questionNumber,
  cardColor,
  premadeQuestions,
  defaultQ,
  defaultA,
  allQuizAns,
  setAllQuizAns,
  quizInfo,
  setQuizInfo,
}) {
  const [question, setQuestion] = useState(defaultQ);
  const [customQ, setCustomQ] = useState(false);
  const [ansOptions, setAnsOptions] = useState(defaultA);
  const [correctAnswer, setCorrectAnswer] = useState("")
  const [bgColor, setBgColor] = useState(cardColor);

  useEffect(() => {
    setQuizInfo((quizInfo) => [
      ...quizInfo,
      {
        number: questionNumber,
        bgColor: bgColor,
        question: question,
        correctAnswer: correctAnswer,
        answerOptions: ansOptions,
      },
    ]);
  }, [bgColor, question, correctAnswer, ansOptions]);

  const changeCardColor = (color) => {
    setBgColor(color);

    let updateBgColor = quizInfo.map((questionInfo, i) => {
      if (i + 1 == questionNumber) {
        return { ...questionInfo, bgColor: bgColor };
      } else {
        return questionInfo;
      }
    });
    setQuizInfo(updateBgColor);
  };

  return (
    <Row key={questionNumber} className='mb-5'>
      <Col>
        <div className='card' style={{ backgroundColor: bgColor }}>
          <div className='card-content'>
            <h2 className='font-weight-bold'>QUESTION {questionNumber}</h2>
            {/* Question Components */}
            <div className='question mb-2'>
              {/* Question input field */}
              <Question
                question={question}
                setQuestion={setQuestion}
                customQ={customQ}
                setAnsOptions={setAnsOptions}
              />
              {/* Additional Question Options/Dropdown */}
              <QuestionDropdown
                premadeQuestions={premadeQuestions}
                setQuestion={setQuestion}
                setAnsOptions={setAnsOptions}
                setCustomQ={setCustomQ}
              />
            </div>

            {/* Answer Components */}
            <div>
              {/* Answer Options */}
              {/* {console.log('LIST OF ANS OPTIONS', ansOptions)} */}
              {ansOptions.map((ansOption, i) => (
                <AnsOption
                  key={i}
                  id={i}
                  ansOption={ansOption}
                  ansOptions={ansOptions}
                  setAnsOptions={setAnsOptions}
                  correctAnswer={correctAnswer}
                  setCorrectAnswer={setCorrectAnswer}
                  questionNumber={questionNumber}
                  allQuizAns={allQuizAns}
                  setAllQuizAns={setAllQuizAns}
                />
              ))}
              {/* Add Answer Option */}
              {ansOptions.length < 6 ? (
                <AddAnswer
                  ansOptions={ansOptions}
                  setAnsOptions={setAnsOptions}
                />
              ) : null}
            </div>

            {/* Change card background color */}
            <div className='mt-2 d-flex justify-content-center'>
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
              ].map((color) => (
                <div
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
