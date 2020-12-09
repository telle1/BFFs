const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roomCode: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('user', UserSchema)