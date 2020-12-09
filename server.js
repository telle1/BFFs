const connectDb = require('./config/db.js')
const express = require('express')
const app = express();

//Connect to database
connectDb();

//Init Middleware (Needed to get the data in the body request)
app.use(express.json({extended: false}));

app.use('/api/invite', require('./routes/api/invite'))
app.use('/api/take-quiz', require('./routes/api/take-quiz'))
// it will get the data from the frontend
//create a new quiz
//quizFields = {}
//quiz = new Quiz(quizFields)
//send back a code that you append to the local host 
//also send back a code to see the results

//a route for someone to take the quiz
//a route for results 
app.get('/', (req,res) => {
    res.send('hi')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`))