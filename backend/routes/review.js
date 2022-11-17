const express = require('express')

// create an instance of the router
const router = express.Router()

// controller functions
const { createReview, getReviewsByModule } = require('../controllers/reviewController')

// POST a new review
router.post('/createReview', createReview)

// GET all reviews by module
router.get('/getReviewsByModule', getReviewsByModule)

module.exports = router