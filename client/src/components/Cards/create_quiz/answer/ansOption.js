import React from 'react';
import './ansOption.css';

function AnsOption({
  ansNum,
  ansChoice,
  ansOptions,
  cardNumber,
  setQuizInfo,
  quizInfo, idx
}) {

  const rmvAnswer = (e) => {
    e.preventDefault();

    let ansOptionTemp = { ...ansOptions };
    delete ansOptionTemp[ansNum];

    setQuizInfo({
      ...quizInfo,
      [cardNumber]: {
        ...quizInfo[cardNumber],
        ansOptions: ansOptionTemp,
      },
    });
  };


  return (
      <div className='answer-choice d-flex justify-content-center align-items-center'>
        <input 
          type='radio'
          name='answer_options'
          value={ansNum}
          className='mr-1'
          onChange={() => {
            setQuizInfo({
              ...quizInfo,
              [cardNumber]: { ...quizInfo[cardNumber], correctAnswer: idx}, //set the correct answer = idx of the card, instead of the key
            });
          }}
          required/>

        <label htmlFor='answer-option' className='my-0 mr-2'>
          <textarea
            rows='2'
            className='answer-option'
            value={ansChoice}
            onChange={(e) => {
              e.preventDefault();
              setQuizInfo({
                ...quizInfo,
                [cardNumber]: {
                  ...quizInfo[cardNumber],
                  ansOptions: { ...ansOptions, [ansNum]: e.target.value },
                },
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

