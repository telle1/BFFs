import QuizTakerCards from './quizTakerCards';
import './quizTakerName.css';
import React, { useState } from 'react';

//rendered at /take-quiz/:quizId route
function QuizTakerName({match}){
    const [nameEntered, setNameEntered] = useState(false)
    const [name, setName] = useState("")

    const handleName = (e) => {
        e.preventDefault();
        setNameEntered(true)
    }

    return (
        <React.Fragment>
        {nameEntered ? <QuizTakerCards name={name} match={match}/> :
        
        <div className="enter-container">
            <h1 className="true-friend-header">Are you a true friend?</h1>
            <div className="enter-friend-name">
            <input type= "text" placeholder="Enter name" className="enter-name-input"
            valye={name} onChange={(e) => setName(e.target.value)}></input>
            <button type="submit" className="btn btn-blue" onClick={handleName}>Submit</button>
            </div>
        </div>
        }
        </React.Fragment>
        

    )
}

export default QuizTakerName