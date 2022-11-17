const express = require('express')

// create an instance of the router
const router = express.Router()

// controller functions
const { createTimetable } = require('../controllers/timetableController')

// create or update a timetable
router.patch('/createTimetable', createTimetable)

module.exports = router