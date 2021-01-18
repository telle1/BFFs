import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero/hero.js'
import Invite from './components/Invite/invite.js'
import AllCards from './components/Cards/create_quiz/allcards.js'
import QuizTakerName from './components/Cards/take_quiz/quizTakerName.js'
import Results from './components/Results/results.js'
import MyResults from './components/Results/myresults.js'
import MyNavbar from './components/Navbar/navbar.js'
import QuizProvider from './components/Cards/create_quiz/QuizContext.js'


function App() {

  return (
  <Router>
    <MyNavbar/>
    <Switch>
    <Route exact path="/" component={Hero}></Route>
    <Route path="/invite" component={Invite}></Route>
    <Route path="/create-quiz">
      <QuizProvider> 
        <AllCards/> 
      </QuizProvider> 
    </Route>
    <Route path="/take-quiz/:quizId" component={QuizTakerName}></Route>
    <Route path="/results/:quizId" component={Results}></Route>
    <Route path="/view-results" component={MyResults}></Route>
    </Switch>
  </Router>
  )
}

export default App;
