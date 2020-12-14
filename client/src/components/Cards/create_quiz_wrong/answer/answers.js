import React, { useEffect, useState } from 'react';
import './ansOption.css';



function AnsOption({ ansOption, quizInfo, cardNumber, setQuizInfo }) {

    const rmvAnswer = (e) => {
      e.preventDefault();
  
      let rmvAnsOption = quizInfo.map((card, i) => {
        if (i + 1 == cardNumber) {
          return { ...card, ansOptions: card.ansOptions.filter((ansOptions => ansOptions != ansOption)) };
        } else {
          return card;
        }
      });
      setQuizInfo(rmvAnsOption)
  
    };
  
    const handleAnsOption = (e) => {
      e.preventDefault();
      console.log('wHATS IN e', e.target.value)
  
      let changeAnsOption = quizInfo.map((card, i) => {
        if (i + 1 == cardNumber) {
          return { ...card, ansOptions: [e.target.value]};
        } else {
          return card;
        }
      });
      setQuizInfo(changeAnsOption)
  
    }
  
    return (
      <div className='answer-choice d-flex justify-content-center align-items-center'>
        <input
          type='radio'
          name='answer_options'
          className='mr-1'
          required
        />
        <label htmlFor='answer-option' className='my-0 mr-2'>
          <textarea
            rows='2'
            className='answer-option'
            value={ansOption} onChange={handleAnsOption}
          ></textarea>
        </label>
  
        <button className='btn' onClick={rmvAnswer} > 
          <i className='fas fa-times' style={{ color: 'white' }}></i>
        </button>
      </div>
    );
  }

  ///////


  import AnsOption from './ansOption';

function AddAnswer({ setQuizInfo, cardNumber, quizInfo}) {

  const addAnswerOption = (e) => {
    e.preventDefault();

    let addAnsOption = quizInfo.map((card, i) => {
      if (i + 1 == cardNumber) {
        return { ...card, ansOptions: [...card.ansOptions, <AnsOption ansOption={""}/>] };
      } else {
        return card;
      }
    });

    setQuizInfo(addAnsOption);


  };

  return (
    <button className='btn btn-secondary' onClick={addAnswerOption}>
      Add answer option
    </button>
  );
}
