import './css/Module.css';
import { useState, useEffect } from 'react'
import { FaGenderless } from 'react-icons/fa';

const constants = require('../constants')

let reqBody = {
    acadYear: constants.CURR_ACADYEAR,
    moduleCode: ""
}

let req = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody)
} 

function Module(props) {
    const [module, setModule] = useState(null);

    useEffect(async () => {
        reqBody["moduleCode"] = window.location.pathname.split("/")[2]
        req["body"] = JSON.stringify(reqBody)
        
        const module = await fetch('/api/modules/getModule', req)
        const moduleData = await module.json()
        setModule(moduleData)
        console.log(moduleData)
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
            
        </div>
    )
    
}

export default Module