import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

////history.push({pathname: '/results/${match.params.quizId}', state:{score: score, name: name}})

function Results() {
  const [allResults, setAllResults] = useState([]);
  const location = useLocation();

  console.log('WHAT IS IN ALL RESULTS', allResults);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      name: location.state.name,
      score: location.state.score,
    });

    axios
      .post(`/api/results/${location.state.match.params.quizId}`, body, config) // change to paramsId
      .then((res) => {
        setAllResults(res.data.allResults);
      });
  }, []);

  //Cannot read property 'params' of undefined

  return (
    <div>
      {allResults.length > 0
        ? allResults.map((result) => {
            <p> {result.friendName} {result.score} </p>;
          })
        : null}
      <p>test</p>
    </div>
  );
}

export default Results;
