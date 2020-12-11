const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    roomCode: {
        type: String,
        required: true,
        unique: true
    },
    pin: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('user', UserSchema)