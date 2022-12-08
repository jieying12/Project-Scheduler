import Card from 'react-bootstrap/Card';
import { Component } from "react"
import './Modules.css';

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
            <Card className="card">
                <Card.Header>{module.moduleCode}</Card.Header>
                <Card.Body>
                    <Card.Title>{module.title}</Card.Title>
                    <Card.Text>
                        {module.description}
                    </Card.Text>
                    <button type="button" class="btn btn-outline-dark">Read More</button>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <div className="content">
                <div className="container">
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