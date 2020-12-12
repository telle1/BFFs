const mongoose = require('mongoose')
const config = require('config');
const db = config.get('mongoURI')

const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
    console.log('Database connected!');
    // mongoose.connection.db.dropCollection('quizzes', function(err, result) {console.log('hi')});
    // mongoose.connection.db.dropCollection('users', function(err, result) {console.log('hi')});
    // mongoose.connection.db.dropCollection('results', function(err, result) {console.log('hi')});

    } catch(err){
        console.log('Error message', err.message)
        // process.exit(1)
    }
}

module.exports = connectDb