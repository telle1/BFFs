const express = require('express');
const router = express.Router();
const Quiz = require('../../models/Quiz');
const Results = require('../../models/Results');
const getResultsAndRank = require('./results-helper.js')

router.post('/', async (req, res) => {
  const { roomCode, pin } = req.body;
  try {

    let quiz = await Quiz.findOne({ roomCode: roomCode })
    .then(async quiz => {
      if (!quiz || quiz.pin !== pin ) {
        return res.status(400).json({ error: 'Invalid room code or pin.'});
      }

      // let allResults = await Results.find({ quiz : quiz.id }).populate('quiz').lean()
      // .then(results => {
      //   res.json({'results': results, 'quizOwner': results[0].quiz.userName}) 
      // })
      // .catch(err => console.log(err.message)) //res.json?
      
      let allResults = await Results.find({ quiz : quiz.id }).populate('quiz').lean()

      //otherwise we get a cannot read rank/quiz of undefined
      if (allResults.length > 0){

        allResults.sort((a,b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0)); 
        allResults[0].rank = 1
        for (let i=1; i<allResults.length; i++){
            allResults[i].rank = i+1 
            if (allResults[i].score === allResults[i-1].score){
                allResults[i].rank = allResults[i-1].rank
            }
        }
        res.json({'results': allResults, 'quizOwner': allResults[0].quiz.userName}) 

      }



      res.json({'results': allResults}) 

      })
      .catch(err => console.log(err.message)) //res.json?

  } catch (err) {
    console.log('ERROR MESSAGE', err.message);
  }

});

module.exports = router;


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

        // return res
        //   .status(400)
        //   .json({ errors: [{ msg: 'Invalid room code or pin.' }] });

      // }

      // console.log(results.quiz.pin)
      //query  for that quizzes results
      //,populate>

      //get all the results for that quiz