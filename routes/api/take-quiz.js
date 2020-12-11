const express = require('express')
const router = express.Router();
const Quiz = require('../../models/Quiz.js')

//route api/take-quiz
router.get('/:quizId', (req,res) => {
    Quiz.findOne({roomCode: req.params.quizId}, 'userName quizInfo', (err, quiz) => {
        if  (err) return handleError(err)
        console.log('WHAT IN THE USERS QUIZ INFO', quiz.quizInfo)
    })

    res.json({'quizInfo': [
        {
          number: 1,
          bgColor: 'pink',
          question: 'Why do I want to become a programmer?',
          correctAnswer: 2,
          answerOptions: ['Money', 'I love problem solving', 'Why not?', 'Uhh...']
        },
        {
          number: 2,
          bgColor: 'pink2',
          question: 'What is my favorite subject?',
          correctAnswer: 2,
          answerOptions: ['History', 'Computer Science', 'English', 'Biology'] 
        },
      ]})
}
)

module.exports = router;