const mongoose = require('mongoose')

const ResultsSchema = new mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quiz'
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
