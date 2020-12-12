const express = require ('express')
const router = express.Router()
const Results = require('../../models/Results')

//results/:quizId
router.post('/:quizId', async (req,res) => {
    try {
        const {name, score } = req.body
        let results = new Results({ quizId: req.params.quizId, friendName: name, score: score })
        let newResult = await results.save()

        let allResults = await Results.find({quizId: req.params.quizId}) //an array of objects

        res.json({"allResults": allResults})

    } catch(err){
        console.log('ERROR MESSAGE', err.message)
    }
    
})

module.exports = router