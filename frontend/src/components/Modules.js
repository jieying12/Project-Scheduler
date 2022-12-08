import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Component } from "react"
import './Modules.css';
import SearchSection from '../layout/MainLayout/Header/SearchSection/index';


const defaultState = {
    modules: [],
    skip: 0,
    totalModules: 0
}

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

class Modules extends Component {
    
    constructor(props) {
        super(props)
        this.state = defaultState
        this.getNextPageData = this.getNextPageData.bind(this)
        this.getPreviousPageData = this.getPreviousPageData.bind(this)
    }

    async componentDidMount() {
        const modules = await fetch('/api/modules/getModules', req)
        const modulesData = await modules.json()
        const totalModulesCount = await fetch('/api/modules/getTotalModulesCount')
        const totalModulesCountData = await totalModulesCount.json()
        this.setState({
            ["modules"]: modulesData,
            ["totalModules"]: totalModulesCountData
        })   
    }

    async getNextPageData() {
        reqBody["skip"] = this.state.skip + 10
        req["body"] = JSON.stringify(reqBody)

        const res = await fetch('/api/modules/getModules', req)
        const data = await res.json()
        this.setState({
            ["modules"]: data,
            ["skip"]: reqBody["skip"]
        }) 
        window.scrollTo(0, 0);
    }

    async getPreviousPageData() {
        reqBody["skip"] = this.state.skip - 10
        console.log("PREVIOUS: " + reqBody["skip"])
        req["body"] = JSON.stringify(reqBody)

        const res = await fetch('/api/modules/getModules', req)
        const data = await res.json()
        this.setState({
            ["modules"]: data,
            ["skip"]: reqBody["skip"]
        }) 
        window.scrollTo(0, 0);
    }

    renderCard(module) {
        return (
            <div class="card">
                <div class="card-header">
                    {module.moduleCode}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{module.title}</h5>
                    <p class="card-text">{module.description}</p>
                    <a href="#" class="btn btn-outline-dark">Read More</a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    {/* <div className="search-container">
                        <SearchSection/>
                    </div> */}
                    {this.state.modules.map(module => this.renderCard(module))}
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            { this.state.skip == 0 ?
                                <li class="page-item disabled">
                                    <a class="page-link">Previous</a>
                                </li> :
                                <li class="page-item">
                                    <a class="page-link" onClick={this.getPreviousPageData}>Previous</a>
                                </li>
                            }

                            { this.state.skip + 10 > this.state.totalModules ?
                                <li class="page-item disabled">
                                    <a class="page-link" onClick={this.getNextPageData}>Next</a>
                                </li> :
                                <li class="page-item">
                                    <a class="page-link" onClick={this.getNextPageData}>Next</a>
                                </li> 
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Modules