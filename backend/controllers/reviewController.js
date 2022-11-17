const Review = require('../models/reviewModel')
const Module = require('../models/moduleModel')

// create a review
const createReview = async (req, res) => {
    const {userId, text} = req.body
    try {
        const review = await Review.create({userId, text})
        
        res.status(200).json(review)
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
