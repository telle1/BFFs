const mongoose = require('mongoose');

const QuizTaker = mongoose.Schema({
    quizNo: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    answers: {
        type: [Object],
        required: true
    }
    
})

module.exports = QuizTaker = mongoose.model('quiztaker', QuizTaker)