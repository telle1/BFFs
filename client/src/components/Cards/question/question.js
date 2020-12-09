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