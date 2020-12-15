import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './quizTakerCards.css';
import axios from 'axios';

function QuizTakerCards({ name, match, quizCards, quizOwner }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showAns, setShowAns] = useState();

  const history = useHistory();

  useEffect(() => {
    if (showResults) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({
        name: name,
        score: score,
      });

      axios
        .post(`/api/results/${match.params.quizId}`, body, config) // change to paramsId
        .then((res) => {
          history.push({
            pathname: `/results/${match.params.quizId}`,
            state: {
              allResults: res.data.allResults,
              friendScore: score,
              quizOwner: quizOwner,
            },
          });
        });
    }
  }, [showResults]); //so that score is not one state behind

  return (
    <div className='show-cards'>
      <h1 className='how-well-header mt-3'>
        How well do you know {quizOwner}, {name}?
      </h1>
      <Row key={quizCards.questionNumber} className='mb-5 mt-4'>
        <Col>
          <div
            className='card card-left'
            style={{ backgroundColor: quizCards[currentQuestion].bgColor }}
          >
            <div className='card-content'>
              <h2 className='font-weight-bold'>
                QUESTION {quizCards[currentQuestion].number}
              </h2>
              {/* Question */}
              <h4 className='question mb-2'>
                {quizCards[currentQuestion].question}
              </h4>
              <div>
                {/* Answer Options */}
                {quizCards[currentQuestion].answerOptions.map(
                  (ansOption, idx) => (
                    <AnsOption
                      key={idx}
                      idx={idx}
                      ansOption={ansOption}
                      currentQuestion={currentQuestion}
                      setCurrentQuestion={setCurrentQuestion}
                      quizCards={quizCards}
                      setScore={setScore}
                      setShowResults={setShowResults}
                      setShowAns={setShowAns}
                    />
                  )
                )}
              </div>
              <div className='text-danger'>
                <h2> {showAns}</h2>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function AnsOption({
  ansOption,
  idx,
  currentQuestion,
  setCurrentQuestion,
  quizCards,
  setScore,
  setShowResults,
  setShowAns,
}) {
  const [btnColor, setBtnColor] = useState('white');
  const [letterChoice, setLetterChoice] = useState('');
  const [letterBgCol, setLetterBgCol] = useState('');

  let numToLetter = {
    0: { letter: 'A', bgColor: '#FFB7B2' },
    1: { letter: 'B', bgColor: '#FFDAC1' },
    2: { letter: 'C', bgColor: '#F8F9CA' },
    3: { letter: 'D', bgColor: '#B5EAD7' },
    4: { letter: 'E', bgColor: '#C7CEEA' },
    5: { letter: 'F', bgColor: '#FF9AA2' },
  };

  useEffect(() => {
    setLetterChoice(numToLetter[String(idx)].letter);
    setLetterBgCol(numToLetter[String(idx)].bgColor);
  }, []);

  const changeQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (idx == quizCards[currentQuestion].correctAnswer) {
      setScore((score) => score + 1);
      setBtnColor('#90ee90');
    } else {
      setBtnColor('#ff3232');
      setShowAns(numToLetter[quizCards[currentQuestion].correctAnswer].letter);
    }

    setTimeout(() => {
      setBtnColor('white');
      setShowAns('');
      if (nextQuestion < quizCards.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  return (
    <div className='div-answer-choice py-3'>
      <button
        onClick={() => changeQuestion()}
        style={{ backgroundColor: btnColor }}
        className='btn btn-answer-choice py-0 px-0'
      >
        <Row>
          <Col xs={2}>
            <div
              className='letter-choice d-flex justify-content-center align-items-center'
              style={{ backgroundColor: letterBgCol }}
            >
              {letterChoice}
            </div>
          </Col>
          <Col xs={10} className='btn-column py-2'>
            {ansOption}
          </Col>
        </Row>
      </button>
    </div>
  );
}

export default QuizTakerCards;
