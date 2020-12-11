import './invite.css'
import React, { useEffect, useState }  from 'react'
import { useLocation, Link } from 'react-router-dom'

function Invite(){
  const location = useLocation();
  const [roomCode, setRoomCode] = useState("");

  useEffect(() => {
    setRoomCode(location.state.roomCode)
  }, [location])

  return(
  <div className="invite-friends">
    <h1 className="invite-header mb-4">
      Invite your friends! 
    </h1>
    <h2><Link to={`/take-quiz/${roomCode}`}>http://localhost:3000/take-quiz/{roomCode}</Link></h2>
    <h2 className="results"> To access your results, enter code: </h2>
    <h2 className="result-code">F4SM621</h2>
  </div>
  )
}

export default Invite;
