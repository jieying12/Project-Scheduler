import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Component } from "react"
import './Modules.css';
// import Navbar from "../components/Navbar"

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
        console.log(data)
        this.setState({
            ["modules"]: res.data
        })      
    }

    async getNextPageData(page) {
        reqBody["skip"] = (Number(page) - 1) * 10
        req["body"] = JSON.stringify(reqBody)

        const res = await fetch('/api/modules/getModules', req)
        const data = await res.json()
        console.log(data)
        this.setState({
            ["modules"]: res.data
        }) 
    }

    render() {
        return (
            <div>
                {/* <div>
                   <Navbar/> 
                </div> */}
                <Card className="card">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                
            </div>
            
        )
    }
}

export default Modules