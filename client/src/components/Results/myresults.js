import './myresults.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function MyResults() {
  const [roomCode, setRoomCode] = useState('');
  const [pin, setPin] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [allResults, setAllResults] = useState([]);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const [quizOwner, setQuizOwner] = useState('');

  console.log('whats in all reuslts', allResults);

  const handleResults = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      roomCode: roomCode,
      pin: pin,
    });

    axios
      .post(`/api/my-results`, body, config)
      .then((res) => {
        setShowResults(true);
        setAllResults(res.data.results);
        setQuizOwner(res.data.quizOwner);
        // console.log(res.data.errors.msg)
        // console.log(res.data)
        // console.log('WHAT BE THE RES')
      })
      .catch((err) => {
        if (err.response) {
          setShowError(true);
          setError(err.response.data.error);
        }
      });
  };

  return (
    <React.Fragment>
      {showResults ? (
        allResults.length > 0 ? (
          <div className='my-results'>
            <div className='result-card'>
              <h1 className='owner-name'>{quizOwner}'s BFFs</h1>
              <Table striped className='leaderboard-table'>
                <tbody>
                  {allResults.map((result, i) => (
                    // <p>
                    //   {result.friendName} {result.score} {result.rank}
                    // </p>
                    <ResultRow key={i} result={result}/>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        ) : (
          <div className='no-results'>
            <h1 className='no-results-msg'>
              Cricket, cricket. Noone has taken your quiz yet.
            </h1>
          </div>
        )
      ) : (
        <div className='my-results-prompt'>
          <form onSubmit={handleResults}>
            <div className='results-input d-flex flex-column'>
              <input
                required
                type='text'
                className='code-input'
                placeholder='Room code'
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
              ></input>
              <input
                required
                type='text'
                className='pin-input'
                placeholder='Pin'
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              ></input>
              <br />
              <button type='submit' className='btn btn-blue'>
                Let's find out!
              </button>
              {showError ? (
                <div className='mt-2 text-danger'>{error}</div>
              ) : null}
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}

function ResultRow({ result }) {
  return (
    <React.Fragment>
      <tr className='table-row'>
        <td>{result.rank}</td>
        <td>{result.friendName} </td>
        <td>
          <div className="lb-score">
          {result.score}
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
}


export default MyResults;
