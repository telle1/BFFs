const express = require('express');
const router = express.Router();
const Quiz = require('../../models/Quiz');
const User = require('../../models/User');
const { v4: uuidv4 } = require('uuid');
//uuid

//route /api/invite
router.post('/', async (req, res) => {
  const { quizInfo, userName } = req.body;

  function randomString() {
    var result = '';
    let chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 5; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  try {
    let pin = randomString();
    let roomCode = uuidv4();

    console.log('PIN AND ROOM CODE', pin, roomCode);

    let quizInfoArray = [];
    for (let i = 0; i < 10; i++) {

      const quizFields = {
        number: quizInfo[i + 1].number,
        bgColor: quizInfo[i + 1].bgColor,
        question: quizInfo[i + 1].question,
        correctAnswer: quizInfo[i + 1].correctAnswer, //change later
        answerOptions: Object.values(quizInfo[i+1].ansOptions),
      };
      quizInfoArray.push(quizFields);
    }

    console.log('whats in quizinfo array', quizInfoArray);

    let quiz = new Quiz({
      userName: userName,
      quizInfo: quizInfoArray,
      roomCode: roomCode,
      pin: pin,
    });
    let saveQuiz = await quiz.save();
    console.log('WHATS IN THE QUIZ', saveQuiz)

    res.json({ roomCode: roomCode });
  } catch (err) {
    console.log('ERROR MSG', err.message);
  }
  //send the room code
});

module.exports = router;
