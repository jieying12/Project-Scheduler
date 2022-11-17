const express = require('express')

// create an instance of the router
const router = express.Router()

// controller functions
const { getModule, addModuleReview } = require('../controllers/moduleController')

// GET a single module
router.get('/', getModule)

// UPDATE a single module with review
router.patch('/addModuleReview', addModuleReview)

// UPDATE module with the new review


module.exports = router