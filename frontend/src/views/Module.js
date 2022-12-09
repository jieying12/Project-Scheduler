import './css/Module.css';
import { useState, useEffect } from 'react'
import { FaGenderless } from 'react-icons/fa';

const constants = require('../constants')

let reqModuleBody = {
    acadYear: constants.CURR_ACADYEAR,
    moduleCode: ""
}

let reqReviewsBody = {
    moduleCode: ""
}

let req = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: ""
} 

function Module(props) {
    const [module, setModule] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(async () => {
        let moduleCode = window.location.pathname.split("/")[2]

        reqModuleBody["moduleCode"] = moduleCode
        req["body"] = JSON.stringify(reqModuleBody)
        const module = await fetch('/api/modules/getModule', req)
        const moduleData = await module.json()
        setModule(moduleData)
        console.log(moduleData)

        reqReviewsBody["moduleCode"] = moduleCode
        req["body"] = JSON.stringify(reqReviewsBody)
        const reviews = await fetch('/api/review/getReviewsByModule', req)
        const reviewsData = await reviews.json()
        setReviews(reviewsData)
        console.log(reviewsData)
      },[])

    
    return (
        <div className="content">
            <div className="container">
                <h1>{module.moduleCode}</h1>
                <h2>{module.title}</h2>
                <h5>{module.department} <FaGenderless/> {module.faculty} <FaGenderless/> {module.moduleCredit} MCs</h5>
                <hr/>
                <p>{module.description}</p>
                <h5>Workload</h5> 
            </div>
            <div className="container">
                <h3>Comments</h3>
                <hr/>
            </div>
            
        </div>
    )
    
}

export default Module