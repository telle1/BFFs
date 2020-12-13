import QuizTakerCards from './quizTakerCards';
import './quizTakerName.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//rendered at /take-quiz/:quizId route
function QuizTakerName({ match }) {
  const [nameEntered, setNameEntered] = useState(false);
  const [name, setName] = useState('');
  const [isValidRC, setIsValidRC] = useState(true);

  const [quizCards, setQuizCards] = useState([]);
  const [quizOwner, setQuizOwner] = useState('');
  //check to see if the roomcode is valid
  useEffect(() => {
    axios
      .get(`/api/take-quiz/${match.params.quizId}`)
      .then((res) => {
        setQuizCards(res.data.quizInfo);
        setQuizOwner(res.data.owner);
      })
      .catch((error) => {
        console.log('HERES THE ERROR MSG', error);
        setIsValidRC(false);
      });
  }, [match]);

  const handleName = (e) => {
    e.preventDefault();
    setNameEntered(true);
  };

  return (
    <React.Fragment>
      {isValidRC ? (
        nameEntered ? (
          <QuizTakerCards
            name={name}
            match={match}
            quizCards={quizCards}
            quizOwner={quizOwner}
          />
        ) : (
          <div className='enter-container'>
            <h1 className='header'>Are you a true friend?</h1>
            <div className='enter-friend-name'>
              <input
                type='text'
                placeholder='Enter name'
                className='enter-name-input'
                valye={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <button
                type='submit'
                className='btn pink-button'
                onClick={handleName}
              >
                Submit
              </button>
            </div>
          </div>
        )
      ) : (
        <div className='enter-container'>
          <h1 className='header'>Oops, sorry! Invalid link.</h1>
        </div>
      )}
    </React.Fragment>
  );
}

export default QuizTakerName;
