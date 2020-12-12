const mongoose = require('mongoose')

const ResultsSchema = new mongoose.Schema({
    quizId: {
        type: String,
        required: true
    },
    friendName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
})

module.exports = Results = mongoose.model('results', ResultsSchema)
