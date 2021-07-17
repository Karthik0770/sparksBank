const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('User',userSchema)