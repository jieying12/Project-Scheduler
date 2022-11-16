const express = require('express')
const Module = require('../models/moduleModel.js')

// create an instance of the router
const router = express.Router()

// GET all modules
router.get('/', (req, res) => {
    res.json({msg: 'GET all modules'})
})

// GET a single module
router.get('/:id', (req, res) => {
    res.json({msg: 'GET s single module'})
})

// POST a new module
router.post('/', async (req, res) => {
    const {moduleCode, title, semesters} = req.body

    try {
        const module = await Module.create({moduleCode, title, semesters})
        res.status(200).json(module)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a new module
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a module'})
})

// UPDATE a module
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a module'})
})

module.exports = router