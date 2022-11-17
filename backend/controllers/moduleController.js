const Module = require('../models/moduleModel')
const axios = require('axios')
const constants = require('../constants')

// get a single module
const getModule = async (req, res) => {
    const {acadYear, moduleCode} = req.body
    try {
        let url = constants.NUSMODS_API_URL + acadYear + '/modules/' + moduleCode + '.json'
        const module = await axios.get(url)
        
        res.status(200).json(module.data)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// update module with the review
const addModuleReview = async (req, res) => {
    const {moduleCode, reviewId} = req.body
    let module

    try {
        // find if the module already exist in the database
        module = await Module.find({moduleCode: moduleCode})

        // module already exist in the database, update the array
        if (module.length > 0) {
            module = module[0]
            module.reviewIds.push(reviewId)
            module = await Module.findByIdAndUpdate(module.id, module)
        } else { // create new object as module does not exist in the database
            let url = constants.NUSMODS_API_URL + constants.CURR_ACADYEAR + '/modules/' + moduleCode + '.json'
            let result = await axios.get(url)

            const description = result.data.description
            const title = result.data.title
            const department = result.data.department
            const faculty = result.data.faculty
            const moduleCredit = result.data.moduleCredit
            const reviewIds = [reviewId]

            module = await Module.create({moduleCode, description, title, department, faculty, moduleCredit, reviewIds})
        }

        res.status(200).json(module)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {
    getModule,
    addModuleReview
}