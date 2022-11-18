const axios = require('axios')
const constants = require('../constants')
const Module = require('../models/moduleModel')

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

// ONLY FOR POSTMAN USE ONLY
// To load all module info
const loadAllModules = async (req, res) => {
    try {
        let url = constants.NUSMODS_API_URL + constants.CURR_ACADYEAR + '/moduleList.json'
        const allModules = await axios.get(url)

        for (module of allModules.data) {
            const moduleCode = module.moduleCode
            if (moduleCode.startsWith("GE") || moduleCode.startsWith("BT") || moduleCode.startsWith("CS") || moduleCode.startsWith("IS")) {
                url = constants.NUSMODS_API_URL + constants.CURR_ACADYEAR + '/modules/' + module.moduleCode + '.json'
                const result = await axios.get(url)
    
                const description = result.data.description
                const title = result.data.title
                const department = result.data.department
                const faculty = result.data.faculty
                const moduleCredit = result.data.moduleCredit
                const reviewIds = []
    
                module = await Module.create({moduleCode, description, title, department, faculty, moduleCredit, reviewIds})
            }
        }
        
        res.status(200).json({msg: "All module info loaded successfully!"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// ONLY FOR POSTMAN USE ONLY
// To delete all module info
const deleteAllModules = async (req, res) => {
    try {
       
        await Module.deleteMany({}) 
        res.status(200).json({msg: "All module info deleted successfully!"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getModule,
    loadAllModules,
    deleteAllModules
}