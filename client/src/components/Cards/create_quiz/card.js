import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './card.css';
import AnsOption from './answer/ansOption';
import AddAnswer from './answer/addAns';
import Question from './question/question';
import QuestionDropdown from './question/questionDropdown';

function Card({
  quizInfo,
  setQuizInfo,
  defaultQ,
  defaultA,
  cardColor,
  cardNumber
}) {


  const [question, setQuestion] = useState(defaultQ);
  const [customQ, setCustomQ] = useState(false);
  const [ansOptions, setAnsOptions] = useState(defaultA);
  const [bgColor, setBgColor] = useState(cardColor);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const colors = [
    '#FF9AA2',
    '#FFB7B2',
    '#FFB347',
    '#FFDAC1',
    '#B5EAD7',
    '#E2F0CB',
    '#85E3FF',
    '#ACE7FF',
    '#B28DFF',
    '#97A2FF',
  ];

  const changeCardColor = (color) => {
    setBgColor(color);
    setQuizInfo({
      ...quizInfo,
      [cardNumber]: { ...quizInfo[cardNumber], bgColor: color },
    });
  };

  return (
    <Row key={cardNumber} className='mb-5'>
      <Col key={cardNumber}>
        <div
          key={cardNumber}
          className='card'
          style={{ backgroundColor: bgColor }}
        >
          <div className='card-content'>
            {/* Question Components */}
            <div className='question mb-2'>
              {/* Question input field */}
              <Question
                quizInfo={quizInfo}
                question={question}
                setQuizInfo={setQuizInfo}
                setQuestion={setQuestion}
                customQ={customQ}
                setAnsOptions={setAnsOptions}
                cardNumber={cardNumber}
              />
              {/* Additional Question Options/Dropdown */}
              <QuestionDropdown
                quizInfo={quizInfo}
                setQuestion={setQuestion}
                setAnsOptions={setAnsOptions}
                setCustomQ={setCustomQ}
                setQuizInfo={setQuizInfo}
                cardNumber={cardNumber}
              />
            </div>
            <div>
              {Object.keys(ansOptions).map((num, i) => (
                <AnsOption
                  key={num}
                  ansChoice={ansOptions[num]}
                  ansOptions={ansOptions}
                  ansNum={num}
                  setAnsOptions={setAnsOptions}
                  cardNumber={cardNumber}
                  quizInfo={quizInfo}
                  setQuizInfo={setQuizInfo}
                  correctAnswer={correctAnswer}
                  setCorrectAnswer={setCorrectAnswer}
                />
              ))}
              {Object.keys(ansOptions).length < 6 ? (
                <AddAnswer
                  setAnsOptions={setAnsOptions}
                  cardNumber={cardNumber}
                  quizInfo={quizInfo}
                  setQuizInfo={setQuizInfo}
                  ansOptions={ansOptions}
                />
              ) : null}
            </div>

            {/* Change card background color */}
            <div className='mt-2 d-flex justify-content-center'>
              {colors.map((color) => (
                <div
                  className='btn pick-a-color mr-1'
                  style={{ backgroundColor: color }}
                  onClick={() => changeCardColor(color)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

//    {/* Answer Components */}
//    <div>
//    {/* Answer Options */}
//    {console.log('LIST OF ANS OPTIONS', ansOptions)}
//    {ansOptions.map((ansOption, i) => (
//     <AnsOption
//       key={i}
//       ansNum={i+1}
//       ansChoice={ansOption}
//       ansOptions={ansOptions}
//       setAnsOptions={setAnsOptions}
//       quizInfo={quizInfo}
//       setQuizInfo={setQuizInfo}
//       cardNumber={cardNumber}
//     />
//   ))}
//   {/* Add Answer Option */}
//   {ansOptions.length < 6 ? (
//     <AddAnswer
//       ansOptions={ansOptions}
//       setAnsOptions={setAnsOptions}
//     />
//   ) : null}
// </div>

// setQuizInfo( { ...quizInfo, 7: {...quizInfo[7], [variableNmae]: value} } )

// function Card({
//   questionNumber,
//   quizInfo,
//   setQuizInfo,
//   defaultQ,
//   defaultA,
//   cardColor
// }) {
//   const [question, setQuestion] = useState(defaultQ);
//   const [customQ, setCustomQ] = useState(false);
//   const [ansOptions, setAnsOptions] = useState(defaultA);
//   const [correctAnswer, setCorrectAnswer] = useState('');
//   const [bgColor, setBgColor] = useState(cardColor);

//   //setQuizInfo( { ...quizInfo, 7: {...quizInfo[7], [variableNmae]: value} } )

//   useEffect(() => {
//     setQuizInfo((quizInfo) => [
//       ...quizInfo
//     ]);
//   }, [bgColor, correctAnswer, ansOptions, question]);

//   //setQuizInfo( { ...quizInfo, 7: {...quizInfo[7], [variableNmae]: value} } )

//   const changeCardColor = (color) => {
//     setBgColor(color);

//     let updateBgColor = quizInfo.map((card, i) => {
//       if (i + 1 == questionNumber) {
//         return { ...card, bgColor: color };
//       } else {
//         return card;
//       }
//     });
//     setQuizInfo(updateBgColor);
//   };

//   return (
//     <Row key={questionNumber} className='mb-5'>
//       <Col>
//         <div className='card' style={{ backgroundColor: bgColor }}>
//           <div className='card-content'>
//             <h2 className='font-weight-bold'>QUESTION {questionNumber}</h2>
//             {/* Question Components */}
//             <div className='question mb-2'>
//               {/* Question input field */}
//               <Question
//                 question={question}
//                 setQuestion={setQuestion}
//                 customQ={customQ}
//                 setAnsOptions={setAnsOptions}
//               />
//               {/* Additional Question Options/Dropdown */}
//               <QuestionDropdown
//                 quizInfo={quizInfo}
//                 setQuestion={setQuestion}
//                 setAnsOptions={setAnsOptions}
//                 setCustomQ={setCustomQ}
//               />
//             </div>

//             {/* Answer Components */}
//             <div>
//               {/* Answer Options */}
//               {/* {console.log('LIST OF ANS OPTIONS', ansOptions)} */}
//               {ansOptions.map((ansOption, i) => (
//                 <AnsOption
//                   key={i}
//                   id={i}
//                   ansOption={ansOption}
//                   ansOptions={ansOptions}
//                   setAnsOptions={setAnsOptions}
//                   correctAnswer={correctAnswer}
//                   setCorrectAnswer={setCorrectAnswer}
//                   questionNumber={questionNumber}
//                   quizInfo={quizInfo}
//                   setQuizInfo={setQuizInfo}
//                   correctAnswer={correctAnswer}
//                   questionNumber={questionNumber}
//                 />
//               ))}
//               {/* Add Answer Option */}
//               {ansOptions.length < 6 ? (
//                 <AddAnswer
//                   ansOptions={ansOptions}
//                   setAnsOptions={setAnsOptions}
//                 />
//               ) : null}
//             </div>

//             {/* Change card background color */}
//             <div className='mt-2 d-flex justify-content-center'>
//               {[
//                 '#FF9AA2',
//                 '#FFB7B2',
//                 '#FFB347',
//                 '#FFDAC1',
//                 '#B5EAD7',
//                 '#E2F0CB',
//                 '#85E3FF',
//                 '#ACE7FF',
//                 '#B28DFF',
//                 '#97A2FF',
//               ].map((color) => (
//                 <div
//                   className='btn pick-a-color mr-1'
//                   style={{ backgroundColor: color }}
//                   onClick={() => changeCardColor(color)}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Col>
//     </Row>
//   );
// }

export default Card;
