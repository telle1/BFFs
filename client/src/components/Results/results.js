import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './results.css';

////history.push({pathname: '/results/${match.params.quizId}', state:{score: score, name: name}})

function Results() {
  const [allResults, setAllResults] = useState([]);
  const location = useLocation();

  console.log('WHAT IS IN ALL RESULTS', allResults);

  useEffect(()=> {
    setAllResults(location.state.allResults)
  }, [])

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   const body = JSON.stringify({
  //     name: location.state.name,
  //     score: location.state.score,
  //   });

  //   axios
  //     .post(`/api/results/${location.state.match.params.quizId}`, body, config) // change to paramsId
  //     .then((res) => {
  //       setAllResults(res.data.allResults);
  //     });
  // }, []);

  //Cannot read property 'params' of undefined

  return (
    <div className='results'>
      <div className='card result-card mt-5'>
        <h1 className='result-card-title'>user's BFFs</h1>
        <table>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
            {allResults.length > 0
              ? allResults.map((result, i) => <ResultCard number={i+1} result={result} />)
              : null}
        </table>
      </div>
    </div>
  );
}
//need to account for ties

function ResultCard({ result, number }) {
  return (
    <React.Fragment>
      <tr>
        <td>{number}</td>
        <td>{result.friendName} </td>
        <td>{result.score}</td>
      </tr>
    </React.Fragment>
  );
}

export default Results;
