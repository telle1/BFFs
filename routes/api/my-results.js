const express = require('express');
const router = express.Router();
const Quiz = require('../../models/Quiz');
const Results = require('../../models/Results');

router.post('/', async (req, res) => {
  const { roomCode, pin } = req.body;
  try {

    // let quiz = await (await Quiz.findOne({ roomCode: roomCode }))
    // .then(quiz => {
    //   if (!quiz || quiz.pin !== pin ) {
    //     return res
    //       .status(400)
    //       .json({ errors: [{ msg: 'Invalid room code or pin.' }] });
    //   }
    //   //query  for that quizzes results
    //   //,populate>

    //   res.json({'test': 'test'})
    //   //get all the results for that quiz
    // })
    // .catch(err => res.status(400).json({ error: err }))

    let results = await Results.findOne({ roomCode: roomCode }).populate('quiz')
    .then(results => {
      if (!results || results.quiz.pin !== pin ) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid room code or pin.' }] });
      }

      console.log(results.quiz.pin)
      //query  for that quizzes results
      //,populate>

      res.json({'test': 'test'})
      //get all the results for that quiz
    })
    .catch(err => res.status(400).json({ error: err }))




  } catch (err) {
    console.log('ERROR MESSAGE', err.message);
  }
    // res.json({'test': 'test'})
    // res.json({'test': 'test'})
});

module.exports = router;
