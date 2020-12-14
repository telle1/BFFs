import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';
// import axios from 'axios';
import './results.css';

function Results() {
  const [allResults, setAllResults] = useState([]);
  const [friendScore, setFriendScore] = useState();
  const [quizOwner, setQuizOwner] = useState("")
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    try {
    setAllResults(location.state.allResults);
    setFriendScore(location.state.friendScore)
    setQuizOwner(location.state.quizOwner)
    } catch(err) {
      console.log(err)
      setError(true)
    }
  }, [location]);

  return (
    <React.Fragment>
    {error ?  <div className="error-404"></div> :
    <Row className='result-score'>
      <Col xs={5} className='friends-score'>
        <h2 className="friends-header">
          Your <span className='font-weight-bold'>Score</span>
        </h2>
        <div className='circle-score mt-5 mb-5'>
          <p className="big-score">{friendScore}</p>
        </div>
        <p className="small-score">{friendScore} out of 10</p>
      </Col>
      <Col xs={7} className='leaderboard'>
        <h2 className="lb-header"> {quizOwner}'s <span className="font-weight-bold">BFFs</span></h2>
        <Table striped className='leaderboard-table'>
          <tbody>
          
            {allResults.map((result, i) => (
              <ResultRow key={i} result={result} />
            ))}


          </tbody>
        </Table>
      </Col>
    </Row>
}
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

export default Results;
