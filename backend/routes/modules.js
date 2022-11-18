const express = require('express')

// create an instance of the router
const router = express.Router()

// controller functions
const { getModule } = require('../controllers/moduleController')

// GET a single module
router.get('/getModule', getModule)

module.exports = router