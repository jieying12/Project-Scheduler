const express = require('express')

// create an instance of the router
const router = express.Router()

// controller functions
const { getModule, loadAllModules, deleteAllModules, getModules } = require('../controllers/moduleController')

// GET a single module
router.get('/getModule', getModule)

// GET modules by limit
router.get('/getModules', getModules)

// ONLY FOR POSTMAN USE
// GET all modules
router.get('/loadAllModules', loadAllModules)

// ONLY FOR POSTMAN USE
// DELETE all modules
router.delete('/deleteAllModules', deleteAllModules)

module.exports = router