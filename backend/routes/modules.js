const express = require('express')

// create an instance of the router
const router = express.Router()

// controller functions
const { getModule, loadAllModules, deleteAllModules, getModules, getTotalModulesCount } = require('../controllers/moduleController')

// GET a single module
router.post('/getModule', getModule)

// GET modules by limit
router.post('/getModules', getModules)

// GET total number of modules
router.get('/getTotalModulesCount', getTotalModulesCount)

// ONLY FOR POSTMAN USE
// GET all modules
router.get('/loadAllModules', loadAllModules)

// ONLY FOR POSTMAN USE
// DELETE all modules
router.delete('/deleteAllModules', deleteAllModules)

module.exports = router