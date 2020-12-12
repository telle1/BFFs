const express = require('express')
const router = express.Router();
const Quiz = require('../../models/Quiz.js')

//route api/take-quiz
router.get('/:quizId', async (req,res) => {
  try {

  await Quiz.findOne({roomCode: req.params.quizId}, 'userName quizInfo', (err, quiz) => {
      if (err) return handleError(err)
      console.log('WHAT IN THE USERS QUIZ INFO', quiz.quizInfo)
      res.json({'quizInfo': quiz.quizInfo, 'owner': quiz.userName})
  })

  
  } catch(err){
    console.log('ERRIR MESSAGE', err.message)
  }


      // 'e8a9db83-9b4e-4f07-af28-fca60636a2e9'
}
)

module.exports = router;