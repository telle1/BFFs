const mongoose = require('mongoose')
const QuizSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    quizInfo: {
        type: [Object],
        required: true
    }
})

module.exports = Quiz = mongoose.model('quiz', QuizSchema)