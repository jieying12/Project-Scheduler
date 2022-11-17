const express = require('express')

// create an instance of the router
const router = express.Router()

// controller functions
const { createReview } = require('../controllers/reviewController')

// POST a new review
router.post('/', createReview)


module.exports = router