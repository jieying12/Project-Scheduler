const mongoose = require('mongoose')

const Schema = mongoose.Schema

// timestamp logs when the object was created etc
const timetableSchema = new Schema({
    userId: {
        type: mongoose.ObjectId,
        ref: 'users',
        required: true
    },
    acadYear: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    modules: {
        type: [Schema.Types.Mixed],
        required: true,
    }
}, { timestamps: true })

// the combi should be unique
timetableSchema.index({ userId: 1, acadYear: 1, semester: 1 }, { unique: true })

module.exports = mongoose.model('Timetable', timetableSchema)