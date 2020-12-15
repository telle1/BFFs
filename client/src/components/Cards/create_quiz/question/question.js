import './question.css'

function Question({ cardNumber, question, customQ, setQuizInfo, quizInfo}) {
    return (
      <div>
        {customQ ? (
          <textarea
            rows='3'
            className='question-text-area'
            placeholder='Custom question here'
            value={question}
            onChange={(e) => {
              setQuizInfo({
                ...quizInfo,
                [cardNumber]: {...quizInfo[cardNumber], question: e.target.value}
              });
            }}
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