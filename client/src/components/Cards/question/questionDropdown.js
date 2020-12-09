import { Dropdown } from 'react-bootstrap';
import './questionDropdown.css'

function QuestionDropdown({
    premadeQuestions,
    setQuestion,
    setAnsOptions,
    setCustomQ,
  }) {
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
          {premadeQuestions.map((premadeQuestion, i) => (
            <Dropdown.Item
              key={i}
              className='premade-question'
              onClick={() => {
                setQuestion(premadeQuestion.question);
                setAnsOptions(premadeQuestion.answer);
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
    );
  }

export default QuestionDropdown;
  