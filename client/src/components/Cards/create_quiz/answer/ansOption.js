import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import './ansOption.css';

function AnsOption({
  ansNum,
  ansChoice,
  setAnsOptions,
  ansOptions,
  cardNumber,
  setQuizInfo,
  quizInfo,
  correctAnswer,
  setCorrectAnswer,
}) {
  const rmvAnswer = (e) => {
    e.preventDefault();

    console.log('wjats in ansoptions', ansOptions);

    let ansOptionTemp = { ...ansOptions };
    delete ansOptionTemp[ansNum];
    setAnsOptions(ansOptionTemp);

    setQuizInfo({
      ...quizInfo,
      [cardNumber]: {
        ...quizInfo[cardNumber],
        ansOptions: ansOptionTemp,
      },
    });
  };

  return (
    <Form>
      <div className='answer-choice d-flex justify-content-center align-items-center'>
        <input
          type='radio'
          id={ansNum}
          name='answer_options'
          value={ansChoice}
          className='mr-1'
          onChange={() => {
            setCorrectAnswer(ansNum);
            setQuizInfo({
              ...quizInfo,
              [cardNumber]: { ...quizInfo[cardNumber], correctAnswer: ansNum },
            });
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

              setAnsOptions({ ...ansOptions, [ansNum]: e.target.value });

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
    </Form>
  );
}

export default AnsOption;

// function AnsOption({
//   ansNum,
//   ansChoice,
//   setAnsOptions,
//   ansOptions,
//   setQuizInfo,
//   quizInfo,
//   cardNumber,
// }) {
//   const [correctAnswer, setCorrectAnswer] = useState('');

//   const rmvAnswer = (e) => {
//     e.preventDefault();
//     const newAnsOptions = ansOptions.filter((ans, i) => i !== ansNum - 1);
//     setAnsOptions(newAnsOptions);

//     setQuizInfo({
//       ...quizInfo,
//       [cardNumber]: {
//         ...quizInfo[cardNumber],
//         ansOptions: newAnsOptions,
//       },
//     });
//   };

//   return (
//     <div className='answer-choice d-flex justify-content-center align-items-center'>
//       <input
//         type='radio'
//         id={ansNum}
//         name='answer_options'
//         value={ansChoice}
//         className='mr-1'
//         onClick={() => {
//           setCorrectAnswer(ansNum);
//           setQuizInfo({
//             ...quizInfo,
//             [cardNumber]: { ...quizInfo[cardNumber], correctAnswer: ansNum },
//           });
//         }}
//         required
//       />
//       <label htmlFor='answer-option' className='my-0 mr-2'>
//         <textarea
//           rows='2'
//           className='answer-option'
//           value={ansChoice}
//           onChange={(e) => {

//             const filterAns = ansOptions.filter((ans, i) => i+1 != ansNum);
//             console.log(filterAns,' whats il infilter ans') //b,c,d

//             let changeAns = ansOptions.map((ans, i) => {
//               if (i + 1 == ansNum) {
//                 return [e.target.value];
//               } else {
//                 return [...ans];
//               }
//             });

//             // setAnsOptions([...ansOptions, e.target.value]);
//             setAnsOptions([changeAns])

//             // setQuizInfo({
//             //   ...quizInfo,
//             //   [cardNumber]: {
//             //     ...quizInfo[cardNumber],
//             //     ansOptions: [...ansOptions, e.target.value],
//             //   },
//             // });
//           }}
//         ></textarea>
//       </label>

//       <button className='btn' onClick={rmvAnswer}>
//         <i className='fas fa-times' style={{ color: 'white' }}></i>
//       </button>
//     </div>
//   );
// }

// export default AnsOption;

// function AnsOption({
//   optionNum,
//   ansOption,
//   setAnsOptions,
//   ansOptions,
//   cardNumber,
//   setCorrectAnswer,
//   setQuizInfo,
//   quizInfo,
//   correctAnswer,
// }) {
//   const [ansText, setAnsText] = useState();

//   useEffect(() => {
//     setAnsText(ansOption);
//   }, [ansOption]);

//   const rmvAnswer = (e) => {
//     e.preventDefault();
//     const newAnsOptions = ansOptions.filter((ans, i) => i !== optionNum);
//     setAnsOptions(newAnsOptions);

//     setQuizInfo({
//       ...quizInfo,
//       [cardNumber]: {
//         ...quizInfo[cardNumber],
//         ansOptions: newAnsOptions
//       },
//     });

//   };

//   return (
//     <div className='answer-choice d-flex justify-content-center align-items-center'>
//       <input
//         type='radio'
//         id={optionNum}
//         name='answer_options'
//         value={ansText}
//         className='mr-1'
//         onClick={() => {
//           setCorrectAnswer(optionNum);
//           setQuizInfo({
//             ...quizInfo,
//             [cardNumber]: { ...quizInfo[cardNumber], correctAnswer: optionNum },
//           });
//         }}
//         required
//       />
//       <label htmlFor='answer-option' className='my-0 mr-2'>
//         <textarea
//           rows='2'
//           className='answer-option'
//           value={ansText}
//           onChange={(e) => {
//             setAnsText(e.target.value);

//             setQuizInfo({
//               ...quizInfo,
//               [cardNumber]: {
//                 ...quizInfo[cardNumber],
//                 ansOptions: [...ansOptions, e.target.value]
//               },
//             });

//           }}
//         ></textarea>
//       </label>

//       <button className='btn' onClick={rmvAnswer}>
//         <i className='fas fa-times' style={{ color: 'white' }}></i>
//       </button>
//     </div>
//   );
// }

// export default AnsOption;

// let updatedAnsOptions = ansOptions.map((ansOption, i) => {
//   if (i == id) {
//     console.log('WHTS IN ANS OPTION', ansOption);
//     return (ansOption = e.target.value);
//   } else {
//     return ansOption;
//   }
// });
// setAnsOptions(updatedAnsOptions);
