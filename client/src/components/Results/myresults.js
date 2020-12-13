import './myresults.css';
import axios from 'axios';
import React, { useState } from 'react';
function MyResults() {
  const [roomCode, setRoomCode] = useState('');
  const [pin, setPin] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [allResults, setAllResults] = useState([]);

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

    axios.post(`/api/my-results`, body, config)
    .then((res) => {
      // setShowResults(true);
      // setAllResults(res.data.allResults)
      // console.log(res.data.errors.msg)
      // console.log(res.data)
      console.log(res)
    })
    .catch(err => console.log('ERROR MESSAGE', err))
  };

  return (
    <React.Fragment>
      <div className='my-results-prompt'>
        {showResults ? (
          <div>hi </div>
        ) : (
            <form onSubmit={handleResults}>
              <div className='results-input d-flex flex-column'>
                <input required
                  type='text'  
                  className='code-input'
                  placeholder='Room code'
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                ></input>
                <input required
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
              </div>
            </form>
        )}
      </div>
    </React.Fragment>
  );
}

export default MyResults;
