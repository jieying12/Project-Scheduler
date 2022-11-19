import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Component } from "react"
import './Modules.css';

const defaultState = {
    modules: []
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
        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    async componentDidMount() {
        const res = await fetch('/api/modules/getModules', req);
        const data = await res.json()
        this.setState({
            ["modules"]: data
        })    
    }

    async getNextPageData(page) {
        reqBody["skip"] = (Number(page) - 1) * 10
        req["body"] = JSON.stringify(reqBody)

        const res = await fetch('/api/modules/getModules', req)
        const data = await res.json()
        this.setState({
            ["modules"]: data
        }) 
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
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    {this.state.modules.map(module => this.renderCard(module))}
                </div>
            </div>
            
            
        )
    }
}

export default Modules