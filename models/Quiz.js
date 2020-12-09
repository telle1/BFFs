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

//user table
//user
//+their room link
//+ their results link