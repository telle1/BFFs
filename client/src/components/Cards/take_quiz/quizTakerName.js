import QuizTakerCards from './quizTakerCards'
import './quizTakerName.css'
import React, { useState} from 'react'

function QuizTakerName(){
    const [nameEntered, setNameEntered] = useState(false)
    const [name, setName] = useState()

    const handleName = (e) => {
        e.preventDefault();
        setNameEntered(true)
        setName(e.target.value)
    }

    return (
        <React.Fragment>
        {nameEntered ? <QuizTakerCards name={name}/> :
        
        <div className="enter-container">
            <h1 className="true-friend-header">Are you a true friend?</h1>
            <div className="enter-friend-name">
            <input type= "text" placeholder="Enter name" className="enter-name-input"></input>
            <button type="submit" className="btn btn-blue" onClick={handleName}>Submit</button>
            </div>
        </div>
        }
        </React.Fragment>
        

    )
}

export default QuizTakerName