const express = require('express');
const router = express.Router();
const Quiz = require('../../models/Quiz');
const Results = require('../../models/Results');

router.post('/', async (req, res) => {
  const { roomCode, pin } = req.body;
  try {
    let quiz = await Quiz.findOne({ roomCode: roomCode });
    if (!quiz || quiz.pin !== pin ) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid room code or pin.' }] });
      }
    // res.json({allResults: quiz.AllResults})
    //need to return all the reults queryinto the results model
    res.json({'test': 'test'})


  } catch (err) {
    console.log('ERROR MESSAGE', err.message);
  }
    // res.json({'test': 'test'})
    // res.json({'test': 'test'})
});

module.exports = router;
