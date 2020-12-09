import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './quizTakerCards.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function QuizTakerCards({name}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizCards, setQuizCards] = useState([
    {
      number: 1,
      bgColor: 'pink',
      question: 'Why do I want to become a programmer?',
      correctAnswer: 2,
      answerOptions: ['Money', 'I love problem solving', 'Why not?', 'Uhh...']
    },
    {
      number: 2,
      bgColor: 'pink2',
      question: 'What is my favorite subject?',
      correctAnswer: 2,
      answerOptions: ['History', 'Computer Science', 'English', 'Biology'] 
    },
  ]);

  useEffect(() => {
    const fetchUserCards = async () => {
      const result = await axios.get('/api/take-quiz/:quizId');
      // fetch('/api/take-quiz/:quizId')
      // .then(res => res.json())
      // .then(data=> console.log(data))
      console.log('WHATS IN USER CARDS', result.data.test);
      // setQuizCards(result.data.test)
    };
    fetchUserCards();
    // setQuizCards(getUserCards.data)
  }, []);

  console.log('WHATS IN SCORE', score);

  return (
    <Row key={quizCards.questionNumber} className='mb-5 mt-5'>
        {/* <p>Are you a true friend, {name}? </p> */}
      <Col>
        <div
          className='card'
          style={{ backgroundColor: quizCards[currentQuestion].bgColor }}
        >
          {showScore ? (
            <h1 className="d-flex justify-content-center align-items-center">Work in progress.... </h1>
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
}) {
  const history = useHistory();

  const [btnColor, setBtnColor] = useState('white');
  const [letterChoice, setLetterChoice] = useState('');
  const [letterBgCol, setLetterBgCol] = useState('')

  let numToLetter = {
    '0': {'letter': 'A', 'bgColor': '#FFB7B2'},
    '1': {'letter': 'B', 'bgColor': '#FFDAC1'},
    '2': {'letter': 'C', 'bgColor': '#F8F9CA'},
    '3': {'letter': 'D', 'bgColor': '#B5EAD7'},
    '4': {'letter': 'E', 'bgColor': '#C7CEEA'},
    '5': {'letter': 'F', 'bgColor': '#FF9AA2'},
  };

  useEffect(() => {
    setLetterChoice(numToLetter[String(id)].letter);
    setLetterBgCol(numToLetter[String(id)].bgColor);
  }, []);

  console.log('LETTER CHOICE', letterChoice);

  const changeQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (id + 1 == quizCards[currentQuestion].correctAnswer) {
      console.log('HIHIHIHIHIHI');
      setScore(score + 1);
      setBtnColor('#90ee90');
    } else {
      setBtnColor('#ff3232');
      setTimeout(() => {
        // history.push('/');
        <p>Work in progess....</p>
      }, 1000);
    }

    setTimeout(() => {
      setBtnColor('white');
      if (nextQuestion < quizCards.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
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
        {/* <h2 className="float-left">{letterChoice}</h2>
            <h2>{ansOption}</h2>         */}
        <Row>
          <Col
            xs={2}
  
          >
              <div className="letter-choice d-flex justify-content-center align-items-center"
              style={{backgroundColor: letterBgCol}}>
              {letterChoice}
              </div>
           
          </Col>
          <Col 
            xs={10}
            className='btn-column py-2'
          >
            {ansOption}
          </Col>
        </Row>
      </button>
    </div>
  );
}

export default QuizTakerCards;
