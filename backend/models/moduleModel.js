const mongoose = require('mongoose')

const Schema = mongoose.Schema

// timestamp logs when the object was created etc
const moduleSchema = new Schema({
    moduleCode: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Module', moduleSchema)