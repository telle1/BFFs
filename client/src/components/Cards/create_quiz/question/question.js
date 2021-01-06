import './question.css'
import React from 'react'
import { UseQuiz, SetQuiz } from '../QuizContext'

function Question({ customQ, cardNumber }) {

  const [quizInfo, changeCardProp] = [UseQuiz(), SetQuiz()];
  const question = quizInfo[cardNumber].question

    return (
      <div>
        {customQ ? (
          <textarea
            rows='3'
            className='question-text-area'
            placeholder='Custom question here'
            value={question}
            onChange={(e) => changeCardProp(cardNumber, 'question', e.target.value)}
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