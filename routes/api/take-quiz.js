const express = require('express');
const router = express.Router();
const Quiz = require('../../models/Quiz.js');

//route api/take-quiz
router.get('/:quizId', async (req, res) => {
  try {
    await Quiz.findOne({ roomCode: req.params.quizId })
      .then((quiz) =>
        res.json({ quizInfo: quiz.quizInfo, owner: quiz.userName })
      )
      .catch((err) => res.status(400).json({ error: err }));
  } catch (err) {
    console.log('ERRIR MESSAGE', err.message);
  }
});

module.exports = router;
