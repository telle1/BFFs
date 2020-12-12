import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero/hero.js'
import Invite from './components/Invite/invite.js'
import AllCards from './components/Cards/create_quiz/allcards.js'
import QuizTakerName from './components/Cards/take_quiz/quizTakerName.js'
import Results from './components/Results/results.js'
import MyResults from './components/Results/myresults.js'


function App() {

  return (
  <Router>
    <Switch>
    <Route exact path="/" component={Hero}></Route>
    <Route path="/invite" component={Invite}></Route>
    <Route path="/create-quiz" component={AllCards}></Route>
    <Route path="/take-quiz/:quizId" component={QuizTakerName}></Route>
    <Route path="/results/:quizId" component={Results}></Route>
    <Route path="/view-results" component={MyResults}></Route>
    </Switch>
  </Router>
  )
}


// function AllCards() {
//   const premadeQuestions = [
//     { question: 'What is my favorite drink?', answer: ['a', 'b', 'c', 'd'] },
//     { question: 'Where was my best vacation?', answer: ['e', 'f', 'g', 'h'] },
//     {
//       question: 'What was the name of my favorite stuffed animal?',
//       answer: ['i', 'j', 'k', 'l'],
//     },
//     { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
//     { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
//     { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
//     { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
//     { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
//     { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
//     { question: 'Where was my childhood home?', answer: ['m', 'n', 'o', 'p'] },
//   ];

//   const handleQuestionSubmit = (e) => {
//     e.preventDefault();
//     console.log('need to also send all the background colors?');
//     console.log('ALL ANSWERS ARRAY', allQuizAns);
//   };

//   const [allQuizAns, setAllQuizAns] = useState([]);
//   console.log('all quiz ansawers', allQuizAns);

//   return (
//     <QuestionContext.Provider value={{ setAllQuizAns, allQuizAns }}>
//       <Form onSubmit={handleQuestionSubmit}>
//         {[
//           '#FF9AA2',
//           '#FFB7B2',
//           '#FFB347',
//           '#FFDAC1',
//           '#B5EAD7',
//           '#E2F0CB',
//           '#85E3FF',
//           '#ACE7FF',
//           '#B28DFF',
//           '#97A2FF',
//         ].map((cardColor, i) => (
//           <Card
//             key={cardColor}
//             questionNumber={i + 1}
//             cardColor={cardColor}
//             defaultQ={premadeQuestions[i].question}
//             defaultA={premadeQuestions[i].answer}
//             premadeQuestions={premadeQuestions}
//           ></Card>
//         ))}
//         <div className= "d-flex justify-content-center">
//         <button type='submit' className='btn btn-secondary'>
//           Create my quiz!
//         </button>
//         </div>
//       </Form>
//     </QuestionContext.Provider>
//   );
// }

// function Card({
//   questionNumber,
//   cardColor,
//   premadeQuestions,
//   defaultQ,
//   defaultA,
// }) {
//   const [question, setQuestion] = useState(defaultQ);
//   const [customQ, setCustomQ] = useState(false);
//   const [ansOptions, setAnsOptions] = useState(defaultA);
//   const [bgColor, setBgColor] = useState(cardColor);

//   const changeCardColor = (color) => {
//     setBgColor(color);
//   };

//   return (
//     <Row className='mb-5'>
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
//                 premadeQuestions={premadeQuestions}
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
//                   className='btn colors mr-1'
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

// function Question({ question, setQuestion, customQ }) {
//   return (
//     <React.Fragment>
//       {customQ ? (
//         <textarea
//           rows='3'
//           className='text-area'
//           placeholder='Custom question here'
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         ></textarea>
//       ) : (
//         <textarea
//           rows='3'
//           className='text-area'
//           value={question}
//           readOnly
//         ></textarea>
//       )}
//     </React.Fragment>
//   );
// }

// function QuestionDropdown({
//   premadeQuestions,
//   setQuestion,
//   setAnsOptions,
//   setCustomQ,
// }) {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle
//         variant='secondary'
//         className='question-dropdown'
//         id='dropdown-basic'
//       >
//         More Questions
//       </Dropdown.Toggle>
//       <Dropdown.Menu className='question-dropdown-menu'>
//         {premadeQuestions.map((premadeQuestion, i) => (
//           <Dropdown.Item
//             key={i}
//             className='premade-question'
//             onClick={() => {
//               setQuestion(premadeQuestion.question);
//               setAnsOptions(premadeQuestion.answer);
//             }}
//           >
//             {premadeQuestion.question}
//           </Dropdown.Item>
//         ))}
//         <Dropdown.Item
//           onClick={() => {
//             setQuestion('');
//             setCustomQ(true);
//             setAnsOptions(['', '', '', '']);
//           }}
//         >
//           Add custom question
//         </Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// function AnsOption({
//   id,
//   ansOption,
//   setAnsOptions,
//   ansOptions,
//   questionNumber,
// }) {
//   const { setAllQuizAns } = useContext(QuestionContext);
//   const [ansText, setAnsText] = useState();

//   useEffect(() => {
//     setAnsText(ansOption);
//   }, [ansOption]);

//   const rmvAnswer = () => {
//     const newAnsOptions = ansOptions.filter((ans, i) => i !== id);
//     setAnsOptions(newAnsOptions);
//   };

//   return (
//     <div className='answer-choice d-flex justify-content-center align-items-center'>
//       <input
//         type='radio'
//         id={`choice_${id}`}
//         name='answer_options'
//         value={ansText}
//         className='mr-1'
//         onClick={() => {
//           setAllQuizAns((allQuizAns) => [
//             ...allQuizAns,
//             { question: questionNumber, answerNum: id + 1 },
//           ]);
//         }}
//         required
//       />
//       <label htmlFor='male' className='my-0 mr-2'>
//         <textarea
//           rows='2'
//           className='answer-option'
//           value={ansText}
//           onChange={(e) => setAnsText(e.target.value)}
//         ></textarea>
//       </label>

//       <button className='btn' onClick={rmvAnswer}>
//         <i className='fas fa-times' style={{ color: 'white' }}></i>
//       </button>
//     </div>
//   );
// }

// function AddAnswer({ setAnsOptions, ansOptions }) {
//   const addAnswerOption = (e) => {
//     e.preventDefault();
//     setAnsOptions((ansOptions) => [...ansOptions, '']);
//   };

//   return (
//     <button className='btn btn-secondary' onClick={addAnswerOption}>
//       Add answer option
//     </button>
//   );
// }

export default App;
