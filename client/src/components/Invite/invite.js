import './invite.css'
import React, { useEffect, useState }  from 'react'
import { useLocation, Link } from 'react-router-dom'

function Invite(){
  const location = useLocation();
  const [roomCode, setRoomCode] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false)
 
  useEffect(() => {
    try {
    setRoomCode(location.state.roomCode)
    setPin(location.state.pin)
    } catch(err){
      setError(true)
    }
  }, [location])

  return(
  <div className="invite-friends">
    {error ? <h1 className="invite-text invite-header"> Awkward... Invite link not found. </h1> :
    <div className="invite-text">
    <h1 className="invite-header mb-4">
      Invite your friends! 
    </h1>
    <h2 className="link mt-3"><Link to={`/take-quiz/${roomCode}`}>http://localhost:3000/take-quiz/{roomCode}</Link></h2>
    <h2 className="result-code">Pin: {pin}</h2>
    <h5 className="text-primary">To access your results, please keep your room code (the lovely stuff in the link after take-quiz/) and pin. </h5>
    </div>
  }

  </div>
  )
}

export default Invite;
