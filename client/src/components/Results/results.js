import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import './results.css';

function Results() {
  const [allResults, setAllResults] = useState([]);
  const [friendScore, setFriendScore] = useState();
  const location = useLocation();

  useEffect(() => {
    setAllResults(location.state.allResults);
    setFriendScore(location.state.friendScore)
  }, []);

  return (
    <Row className='results'>
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
        <h2 className="lb-header"> Name's <span className="font-weight-bold">BFFs</span></h2>
        <Table striped className='leaderboard-table'>
          <tbody>
          
            {allResults.map((result, i) => (
              <ResultRow key={i} result={result} />
            ))}


          </tbody>
        </Table>
      </Col>
    </Row>
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
