const express = require('express');
const router = express.Router();
const Quiz = require('../../models/Quiz');
const User = require('../../models/User');
const {v4: uuidv4} = require('uuid')
//uuid

//route /api/invite
router.post('/', async (req, res) => {
  const { quizInfo, userName } = req.body;

  function randomString(){
    var result = "";
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i=0; i<5; i++){
      result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
  }

  try {
  let pin = randomString();
  let roomCode = uuidv4();

  console.log('PIN AND ROOM CODE', pin, roomCode)
  
  // add a user to the user model
  let user = new User({firstName: userName, pin: pin, roomCode: roomCode})
  let saveUser = await user.save();
  console.log('wHATS IN USER', saveUser)

  let quizInfoArray = []
  for (let i = 0; i < quizInfo.length; i++) {
    const quizFields = {
      number: quizInfo[i].number,
      bgColor: quizInfo[i].bgColor,
      question: quizInfo[i].question,
      correctAnswer: 1, //change later
      answerOptions: quizInfo[i].answerOptions,
    };
    quizInfoArray.push(quizFields)
  }
    
  let quiz = new Quiz({ userName: userName, quizInfo: quizInfoArray, roomCode: roomCode);
  let saveQuiz = await quiz.save();
  console.log('WHATS IN THE QUIZ', saveQuiz)

  res.json({'roomCode': roomCode})

  } catch(err){
    console.log('ERROR MSG', err.message)
  }
  //send the room code
});

module.exports = router;
