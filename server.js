const connectDb = require('./config/db.js')
const express = require('express')
const path = require('path')
const app = express();

//Connect to database
connectDb();

//Init Middleware (Needed to get the data in the body request)
app.use(express.json({extended: false}));

app.use('/api/invite', require('./routes/api/invite'))
app.use('/api/take-quiz', require('./routes/api/take-quiz'))
app.use('/api/results', require('./routes/api/results'))
app.use('/api/my-results', require('./routes/api/my-results'))

//Serve static assets in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`))