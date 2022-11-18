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

module.exports = {
    getModule,
}