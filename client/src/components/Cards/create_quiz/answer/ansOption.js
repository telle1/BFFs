import React from 'react';
import { UseQuiz, SetQuiz } from '../QuizContext';
import './ansOption.css';

function AnsOption({ ansNum, ansChoice, ansOptions, cardNumber, idx }) {
  const changeCardProp = SetQuiz();

  const rmvAnswer = (e) => {
    e.preventDefault();

    let ansOptionTemp = { ...ansOptions };
    delete ansOptionTemp[ansNum];

    changeCardProp(cardNumber, 'ansOptions', ansOptionTemp);
  };

  return (
    <div className='answer-choice d-flex justify-content-center align-items-center'>
      <input
        type='radio'
        name='answer_options'
        value={ansNum}
        className='mr-1'
        onChange={() => {
          changeCardProp(cardNumber, 'correctAnswer', idx);
        }}
        required
      />

      <label htmlFor='answer-option' className='my-0 mr-2'>
        <textarea
          rows='2'
          className='answer-option'
          value={ansChoice}
          onChange={(e) => {
            e.preventDefault();
            changeCardProp(cardNumber, 'ansOptions', {
              ...ansOptions,
              [ansNum]: e.target.value,
            });
          }}
        ></textarea>
      </label>

      <button className='btn' onClick={rmvAnswer}>
        <i className='fas fa-times' style={{ color: 'white' }}></i>
      </button>
    </div>
  );
}

export default AnsOption;
