const Review = require('../models/reviewModel')
const Module = require('../models/moduleModel')
const constants = require('../constants')
const axios = require('axios')

// create a review and concurrently update the module object
const createReview = async (req, res) => {
    const {userId, username, text, moduleCode} = req.body
    let module

    try {
        const review = await Review.create({userId, username, text})

        // find if the module already exist in the database
        module = await Module.find({moduleCode: moduleCode})

        // module already exist in the database, update the array
        if (module.length > 0) {
            module = module[0]
            module.reviewIds.push(review.id)
            module = await Module.findByIdAndUpdate(module.id, module)
        } else { // create new object as module does not exist in the database
            let url = constants.NUSMODS_API_URL + constants.CURR_ACADYEAR + '/modules/' + moduleCode + '.json'
            let result = await axios.get(url)

            const description = result.data.description
            const title = result.data.title
            const department = result.data.department
            const faculty = result.data.faculty
            const moduleCredit = result.data.moduleCredit
            const reviewIds = [review.id]

            module = await Module.create({moduleCode, description, title, department, faculty, moduleCredit, reviewIds})
        }
        
        res.status(200).json(module)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// retrive all reviews by module
const getReviewsByModule = async (req, res) => {
    const {moduleCode} = req.body
    let reviews = []

    try {
        const module = await Module.find({moduleCode: moduleCode})
        if (module.length > 0) {
            for (reviewId of module[0].reviewIds) {
                let review = await Review.findById(reviewId)
                reviews.push(review)
            }
        }

        res.status(200).json(reviews)
    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createReview,
    getReviewsByModule
}
