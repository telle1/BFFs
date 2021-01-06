import React, { useState, createContext, useContext } from 'react';
import premadeCards from './premadeCards.js';

const QuizContext = createContext({});
const QuizDispatchContext = createContext({});

export function UseQuiz() {
  return useContext(QuizContext);
}

export function SetQuiz() {
  return useContext(QuizDispatchContext);
}

function QuizProvider({ children }) {
  const [quizInfo, setQuizInfo] = useState(premadeCards);

  const changeCardProp = (cardNumber, prop, val, prop2, val2) => {
    setQuizInfo({
      ...quizInfo,
      [cardNumber]: { ...quizInfo[cardNumber], [prop]: val, [prop2]: val2 },
    });
  };

  return (
    <QuizContext.Provider value={quizInfo}>
      <QuizDispatchContext.Provider value={changeCardProp}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizContext.Provider>
  );
}

export default QuizProvider;
