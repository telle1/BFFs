const mongoose = require('mongoose')
const QuizSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    quizInfo: [
        {
        number: {
        type: Number,
        required: true
        },
        bgColor: {
        type: String,
        required: true
        },
        question: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: Number,
            required: true
        },
        answerOptions: {
            type: [Number],
            required: true
        }
    }]
})

module.exports = Quiz = mongoose.model('quiz', QuizSchema)