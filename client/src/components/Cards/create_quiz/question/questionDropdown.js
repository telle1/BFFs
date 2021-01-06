import { Dropdown } from 'react-bootstrap';
import './questionDropdown.css';
import { UseQuiz, SetQuiz } from '../QuizContext'

function QuestionDropdown({
  setCustomQ,
  cardNumber,
}) 
{

  const [quizInfo, changeCardProp] = [UseQuiz(), SetQuiz()];

  let allQ = {};
  for (let i = 1; i <= 10; i++) {
    allQ[quizInfo[i].question] = quizInfo[i].ansOptions;
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
        {Object.keys(allQ).map((key) => (
          <Dropdown.Item
            key={key}
            onClick={()=> {
              changeCardProp(cardNumber, 'question', key, 'ansOptions', allQ[key])
            }}
          >
            {key}
          </Dropdown.Item>
        ))}

        <Dropdown.Item
          onClick={(e)=> {
            setCustomQ(true);
            changeCardProp(cardNumber, 'question', '', 'ansOptions', ['', '', '', ''])
          }}
        >
          Add custom question
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default QuestionDropdown;
