import './invite.css'

function Invite(){
  return(
  <div className="invite-friends">
    <h1 className="invite-header mb-4">
      Invite your friends! 
    </h1>
    <h2><a href="http://localhost:3000/take-quiz/3">http://localhost:3000/take-quiz/3</a></h2>
    <h2 className="results"> To access your results, enter code: </h2>
    <h2 className="result-code">F4SM621</h2>
  </div>
  )
}

export default Invite;
