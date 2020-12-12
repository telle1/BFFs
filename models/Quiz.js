const mongoose = require('mongoose')
const QuizSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    }, 
    roomCode: {
        type: String,
        ref: 'User'
    },
    pin: {
        type: String,
        required: true
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
            type: [String],
            required: true
        }
    }]
})

module.exports = Quiz = mongoose.model('quiz', QuizSchema)