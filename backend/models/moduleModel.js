const mongoose = require('mongoose')

const Schema = mongoose.Schema

// timestamp logs when the object was created etc
const moduleSchema = new Schema({
    moduleCode: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    moduleCredit: {
        type: String,
        required: true
    },
    reviewIds: {
        type: [mongoose.ObjectId],
        ref: 'reviews',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Module', moduleSchema)