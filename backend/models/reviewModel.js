const mongoose = require('mongoose')

const Schema = mongoose.Schema

// timestamp logs when the object was created etc
const reviewSchema = new Schema({
    userId: {
        type: mongoose.ObjectId,
        ref: 'users',
        required: true
    },
    username: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)