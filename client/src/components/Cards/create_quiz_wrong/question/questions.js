import { Dropdown } from 'react-bootstrap';
import './questionDropdown.css'



function QuestionDropdown({ quizInfo, setQuizInfo, cardNumber }) {

  const changeQuestion = (question) => {
    let updateQuestion = quizInfo.map((card, i) => {
      if (i + 1 == cardNumber) {
        return { ...card, question: question };
      } else {
        return card;
      }
    });
    setQuizInfo(updateQuestion);
  }

 

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant='secondary'
        className='question-dropdown'
        id='dropdown-basic'
      >
        More Questions
      </Dropdown.Toggle>
      <Dropdown.Menu className='question-dropdown-menu'>
        {quizInfo.map((quiz, i) => (
          <Dropdown.Item key={i} className='premade-question' onClick={() => changeQuestion(quiz.question)}>
            {quiz.question}
          </Dropdown.Item>
        ))}
        <Dropdown.Item
          // onClick={() => {
          //   setQuestion('');
          //   setCustomQ(true);
          //   setAnsOptions(['', '', '', '']);
          // }}
        >
          Add custom question
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}


///


import './question.css'

function Question({ question, setQuestion, customQ }) {
    return (
      <div>
        {customQ ? (
          <textarea
            rows='3'
            className='question-text-area'
            placeholder='Custom question here'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        ) : (
          <textarea
            rows='3'
            className='question-text-area'
            value={question}
            readOnly
          ></textarea>
        )}
      </div>
    );
  }

export default Question;