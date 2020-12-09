import React, { useEffect, useState } from 'react';
import './ansOption.css'

function AnsOption({
    id,
    ansOption,
    setAnsOptions,
    ansOptions,
    questionNumber,
    allQuizAns,
    correctAnswer,
    setCorrectAnswer,
    setAllQuizAns
  }) {

    const [ansText, setAnsText] = useState();
    useEffect(() => {
      setAnsText(ansOption);
    }, [ansOption]);
  
    const rmvAnswer = (e) => {
      e.preventDefault();
      const newAnsOptions = ansOptions.filter((ans, i) => i !== id);
      setAnsOptions(newAnsOptions);
    };
  
    return (
      <div className='answer-choice d-flex justify-content-center align-items-center'>
        <input key={id}
          type='radio'
          id={id}
          name='answer_options'
          value={ansText}
          className='mr-1'
          onClick={() =>
            // (e) => {
            // setAllQuizAns((allQuizAns) => [
            //   ...allQuizAns,
            //   { question: questionNumber, answerNum: id + 1 },
            // ]);
            // console.log(id+1, 'ANSWER CHOICE')
            setCorrectAnswer(id+1)
            // console.log('WHATS IN CORRECT ASNWER',correctAnswer)
          }
          required
        />
        <label htmlFor='answer-option' className='my-0 mr-2'>
          <textarea
            rows='2'
            className='answer-option'
            value={ansText}
            onChange={(e) => {
              setAnsText(e.target.value)

              let updatedAnsOptions = ansOptions.map((ansOption,i) => {
                if (i == id){
                  console.log('WHTS IN ANS OPTION', ansOption)
                  return ansOption = e.target.value;
                } else {
                  return ansOption
                }
              })
              setAnsOptions(updatedAnsOptions)
            }} //setAnsOptions(e.target.value)
          ></textarea>
        </label>
  
        <button className='btn' onClick={rmvAnswer}>
          <i className='fas fa-times' style={{ color: 'white' }}></i>
        </button>
      </div>
    );
  }

export default AnsOption;