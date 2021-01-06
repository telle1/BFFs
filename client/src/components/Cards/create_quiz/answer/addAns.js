import { UseQuiz, SetQuiz } from '../QuizContext';

function AddAnswer({ cardNumber }) {
  
  const [quizInfo, changeCardProp] = [UseQuiz(), SetQuiz()];
  const ansOptions = quizInfo[cardNumber].ansOptions;

  let lastAnsOptionNum = Object.keys(ansOptions)[
    Object.keys(ansOptions).length - 1
  ];
  if (!lastAnsOptionNum) {
    lastAnsOptionNum = 0;
  }

  let nextOptionNum = Number(lastAnsOptionNum) + 1;

  const addAnswerOption = (e) => {
    e.preventDefault();

    changeCardProp(cardNumber, 'ansOptions', {
      ...ansOptions,
      [nextOptionNum]: '',
    });
  };

  return (
    <button className='btn btn-secondary' onClick={addAnswerOption}>
      Add answer option
    </button>
  );
}

export default AddAnswer;
