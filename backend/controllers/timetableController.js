const Timetable = require('../models/timetableModel')
const User = require('../models/userModel')

// create a timetable
const createTimetable = async (req, res) => {
    const {userId, acadYear, semester, modules} = req.body
    let timetable
    try {
        timetable = await Timetable.find({userId: userId, acadYear: acadYear, semester: semester})
        if (timetable.length > 0) {
            timetable = timetable[0]
            timetable.modules = modules
            timetable = await Timetable.findByIdAndUpdate(timetable.id, timetable)
        } else {
            timetable = await Timetable.create({userId, acadYear, semester, modules})

            // update user schema with the timetable
            let user = await User.findById(userId)
            user.timetableIds.push(timetable.id)
            user = await User.findByIdAndUpdate(userId, user)
        }
        
        res.status(200).json(timetable)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// retrieve timetable by user, acadYear and semester
const getTimetable = async (req, res) => {
    const {userId, acadYear, semester} = req.body

    try {
        const timetable = await Timetable.find({userId: userId, acadYear: acadYear, semester: semester})

        res.status(200).json(timetable[0])
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    createTimetable,
    getTimetable
}
