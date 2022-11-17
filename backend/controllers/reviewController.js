const Review = require('../models/reviewModel')

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

module.exports = {
    createReview
}
