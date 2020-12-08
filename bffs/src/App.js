import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col, Dropdown, Form, Button } from 'react-bootstrap';
function App() {
  return (
    <div className='App pt-5'>
      {['#FF9AA2', '#FFB7B2', '#FFB347', '#FFDAC1', '#B5EAD7', '#E2F0CB', '#85E3FF', '#ACE7FF', '#B28DFF', '#97A2FF'].map((cardColor, i) => (
        <Card questionNumber={i + 1} cardColor={cardColor}></Card>
      ))}
    </div>
  );
}

function Card({ questionNumber, cardColor }) {
  const premadeQuestionsObject = [
    { 'What is my favorite drink?': ['a', 'b', 'c', 'd'] },
    { 'Where was my best vacation?': ['e', 'f', 'g', 'h'] },
    {
      'What was the name of my favorite stuffed animal?': ['i', 'j', 'k', 'l'],
    },
    { 'Where was my childhood home?': ['m', 'n', 'o', 'p'] },
  ];

  const premadeQuestions = [
    {'question': 'What is my favorite drink?', 'answer': ['a', 'b', 'c', 'd']},
    {'question': 'Where was my best vacation?', 'answer': ['e', 'f', 'g', 'h']},
    {'question': 'What was the name of my favorite stuffed animal?', 'answer': ['i', 'j', 'k', 'l']},
    {'question': 'Where was my childhood home?', 'answer': ['m', 'n', 'o', 'p']},
  ];

  const [question, setQuestion] = useState();
  const [customQ, setCustomQ] = useState(false);
  const [ansOptions, setAnsOptions] = useState([]);
  const [bgColor, setBgColor] = useState(cardColor)

  const changeCardColor = (color) => {
    setBgColor(color)
    console.log('hi132')
  }

  return (
    <Row className='mb-5'>
      <Col>
        <div className='card' style={{backgroundColor: bgColor}}>
          <div className='card-content'>
            
            <h2 className='font-weight-bold'>Question {questionNumber}</h2>
            <div className='question mb-2'>
              <Question
                question={question}
                setQuestion={setQuestion}
                customQ={customQ}
                setAnsOptions={setAnsOptions}
              />
              <Dropdown>
                <Dropdown.Toggle
                  variant='secondary'
                  className='question-dropdown'
                  id='dropdown-basic'
                >
                  More Questions
                </Dropdown.Toggle>
                <Dropdown.Menu className='question-dropdown-menu'>

                  {premadeQuestions.map((premadeQuestion, i) => (
                    <Dropdown.Item
                      key={i}
                      className='premade-question'
                      onClick={() => {
                        setQuestion(premadeQuestion.question);
                        setAnsOptions(premadeQuestion.answer)
            
                      }}
                    >
                      {premadeQuestion.question}
                    </Dropdown.Item>
                  ))}
                  <Dropdown.Item
                    onClick={() => {
                      setQuestion('');
                      setCustomQ(true);
                      setAnsOptions(['', '', '', '']);
                    }}
                  >
                    Add custom question
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Form>
              <React.Fragment>
                {console.log('LIST OF ANS OPTIONS', ansOptions)}
                {ansOptions.length !== 0
                  ? ansOptions.map((ansOption, i) => (
                      <AnsOption
                        key={i}
                        id={i}
                        ansOption={ansOption}
                        ansOptions={ansOptions}
                        setAnsOptions={setAnsOptions}
                      />
                    ))
                  : null}
              </React.Fragment>
              {ansOptions.length < 6 ? (
                <AddAnswer
                  ansOptions={ansOptions}
                  setAnsOptions={setAnsOptions}
                />
              ) : null}
            </Form>
            <div className='mt-2 d-flex justify-content-center'>
              {['#FF9AA2', '#FFB7B2', '#FFB347', '#FFDAC1', '#B5EAD7', '#E2F0CB', '#85E3FF', '#ACE7FF', '#B28DFF', '#97A2FF'].map(
                (color) => (
                  <div
                    className='btn colors mr-1'
                    style={{ backgroundColor: color }}
                    onClick={() => changeCardColor(color)}
                  ></div>
                )
              )}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

function Question({ question, setQuestion, customQ }) {
  return (
    <React.Fragment>
      {customQ ? (
        <textarea
          rows='3'
          className='text-area'
          placeholder='Custom question here'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
      ) : (
        <textarea rows='3' className='text-area' value={question}></textarea>
      )}
    </React.Fragment>
  );
}

function AnsOption({ id, ansOption, setAnsOptions, ansOptions }) {
  const [ansText, setAnsText] = useState();

  useEffect(() => {
    setAnsText(ansOption);
  }, [ansOption]);

  const rmvAnswer = (e) => {
    e.preventDefault();
    const newAnsOptions = ansOptions.filter((ans, i) => i !== id);
    setAnsOptions(newAnsOptions);
  };

  return (
    <div className='answer-choice d-flex justify-content-center align-items-center'>
      <input
        type='radio'
        id={`choice_${id}`}
        name='answer_options'
        value={ansText}
        className='mr-1'
      />
      <label htmlFor='male' className='my-0 mr-2'>
        <textarea
          rows='2'
          className='answer-option'
          value={ansText}
          onChange={(e) => setAnsText(e.target.value)}
        ></textarea>
      </label>

      <button className='btn' onClick={rmvAnswer}>
        <i className='fas fa-times' style={{ color: 'white' }}></i>
      </button>
    </div>
  );
}

function AddAnswer({ setAnsOptions, ansOptions }) {
  const addAnswerOption = (e) => {
    e.preventDefault();
    setAnsOptions((ansOptions) => [...ansOptions, '']);
  };

  return (
    <button className='btn btn-secondary' onClick={addAnswerOption}>
      Add answer option
    </button>
  );
}

export default App;
