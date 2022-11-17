const Timetable = require('../models/timetableModel')

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
        }
        
        res.status(200).json(timetable)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    createTimetable
}
