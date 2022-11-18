const express = require('express')

// create an instance of the router
const router = express.Router()

// controller functions
const { createTimetable, getTimetable } = require('../controllers/timetableController')

// create or update a timetable
router.patch('/createTimetable', createTimetable)

// get timetable by user, acadYear and semester
router.get('/getTimetable', getTimetable)

module.exports = router