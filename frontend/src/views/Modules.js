import './Modules.css';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Module from "../components/CardModule"

let reqBody = {
    skip: 0
}

let req = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody)
} 

function Modules(props) {
    const [modules, setModules] = useState([]);
    const [skip, setSkip] = useState(10);
    const [totalModules, setTotalModules] = useState(0);
    let navigate = useNavigate(); 

    useEffect(async () => {
        console.log('component mounted!')
        const modules = await fetch('/api/modules/getModules', req)
        const modulesData = await modules.json()
        const totalModulesCount = await fetch('/api/modules/getTotalModulesCount')
        const totalModulesCountData = await totalModulesCount.json() 
        setModules(modulesData)
        setTotalModules(totalModulesCountData)
      },[])

      const routeChange = (moduleCode) => { 
        let path = `../` + moduleCode; 
        navigate(path);
      }

    const getNextPageData = async() => {
        reqBody["skip"] = skip + 10
        req["body"] = JSON.stringify(reqBody)

        const res = await fetch('/api/modules/getModules', req)
        const data = await res.json()
        setModules(data)
        setSkip(reqBody["skip"])
        window.scrollTo(0, 0);
    }

    const getPreviousPageData = async() => {
        reqBody["skip"] = skip - 10
        console.log("PREVIOUS: " + reqBody["skip"])
        req["body"] = JSON.stringify(reqBody)

        const res = await fetch('/api/modules/getModules', req)
        const data = await res.json()
        setModules(data)
        setSkip(reqBody["skip"])
        window.scrollTo(0, 0);
    }

    return (
        <div className="content">
            <div className="container">
                {modules.map(module => <Module moduleCode = {module.moduleCode} title = {module.title} description = {module.description}/>)}
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        { skip == 0 ?
                            <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                            </li> :
                            <li class="page-item">
                                <a class="page-link" onClick={getPreviousPageData}>Previous</a>
                            </li>
                        }

                        { skip + 10 > totalModules ?
                            <li class="page-item disabled">
                                <a class="page-link" onClick={getNextPageData}>Next</a>
                            </li> :
                            <li class="page-item">
                                <a class="page-link" onClick={getNextPageData}>Next</a>
                            </li> 
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
    
}

export default Modules