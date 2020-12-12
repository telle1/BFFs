import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './quizTakerCards.css';
import axios from 'axios';

function QuizTakerCards({ name, match }) {
  // console.log('FRIENDS NAME', name);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizCards, setQuizCards] = useState([]);

  useEffect(() => {
    const fetchUserCards = () => {
      axios.get(`/api/take-quiz/${match.params.quizId}`).then((res) => {
        setQuizCards(res.data.quizInfo);
      });
    };

    fetchUserCards();
  }, []);

  console.log('WHATS IN SCORE', score);

  return (
    <React.Fragment>
      {quizCards.length > 0 ? (
        <Row key={quizCards.questionNumber} className='mb-5 mt-5'>
          <Col>
            <div
              className='card'
              style={{ backgroundColor: quizCards[currentQuestion].bgColor }}
            >
              {showScore ? (
                <h1 className='d-flex justify-content-center align-items-center'>
                  {score}/10{' '}
                </h1>
              ) : (
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
                      (ansOption, i) => (
                        <AnsOption
                          key={i}
                          match={match}
                          name={name}
                          id={i}
                          ansOption={ansOption}
                          currentQuestion={currentQuestion}
                          setCurrentQuestion={setCurrentQuestion}
                          score={score}
                          quizCards={quizCards}
                          setShowScore={setShowScore}
                          setScore={setScore}
                        />
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      ) : null}
    </React.Fragment>
  );
}

function AnsOption({
  ansOption,
  id,
  currentQuestion,
  setCurrentQuestion,
  quizCards,
  setShowScore,
  setScore,
  score,
  match,
  name,
}) {
  const [btnColor, setBtnColor] = useState('white');
  const [letterChoice, setLetterChoice] = useState('');
  const [letterBgCol, setLetterBgCol] = useState('');
  const history = useHistory();

  let numToLetter = {
    0: { letter: 'A', bgColor: '#FFB7B2' },
    1: { letter: 'B', bgColor: '#FFDAC1' },
    2: { letter: 'C', bgColor: '#F8F9CA' },
    3: { letter: 'D', bgColor: '#B5EAD7' },
    4: { letter: 'E', bgColor: '#C7CEEA' },
    5: { letter: 'F', bgColor: '#FF9AA2' },
  };

  useEffect(() => {
    setLetterChoice(numToLetter[String(id)].letter);
    setLetterBgCol(numToLetter[String(id)].bgColor);
  }, []);

  console.log('LETTER CHOICE', letterChoice);

  const changeQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (id + 1 == quizCards[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setBtnColor('#90ee90');
    } else {
      setBtnColor('#ff3232');
    }

    setTimeout(() => {
      setBtnColor('white');
      if (nextQuestion < quizCards.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);

        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // };
        // const body = JSON.stringify({
        //   name: name,
        //   score: score,
        // });

        // axios
        //   .post(`/api/results/${match.params.quizId}`, body, config) // change to paramsId
        //   .then((res) => {
        //     history.push({
        //       pathname: `/results/${match.params.quizId}`,
        //       state: { allResults: res.data.allResults },
        //     });
        //   });

        history.push({
          pathname: `/results/${match.params.quizId}`,
          state: { score: score, name: name, match: match },
        });
      }
    }, 1000);
  };

  return (
    <div className='div-answer-choice py-3'>
      <button
        onClick={changeQuestion}
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
