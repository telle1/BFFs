const express = require ('express')
const router = express.Router()
const Results = require('../../models/Results')

//results/:quizId
router.post('/:quizId', async (req,res) => {
    try {
        const {name, score } = req.body
        let results = new Results({ quizId: req.params.quizId, friendName: name, score: score })
        let newResult = await results.save()

        let allResults = await Results.find({quizId: req.params.quizId}).lean() //an array of objects //use .lean to turn it into a JSON object
        allResults.sort((a,b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0)); //sort by score
    
        allResults[0].rank = 1
        for (let i=1; i<allResults.length; i++){
            allResults[i].rank = i+1 
            if (allResults[i].score === allResults[i-1].score){
                allResults[i].rank = allResults[i-1].rank
            }
        }

        // console.log('ALL RESULTS', allResults)

        res.json({"allResults": allResults})

    } catch(err){
        console.log('ERROR MESSAGE', err.message)
    }
    
})

module.exports = router