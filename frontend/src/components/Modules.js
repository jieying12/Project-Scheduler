import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Component } from "react"
import './Modules.css';
import axios from 'axios';
// import Navbar from "../components/Navbar"

const getModules = `${process.env.REACT_APP_API_URL}/modules/getModules`
const defaultState = {
    modules: []
}

class Modules extends Component {
    
    constructor(props) {
        super(props)
        this.state = defaultState
        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount() {
        console.log(getModules)
        axios.post(getModules, {skip: 0}, {}).then(res => {
            console.log(res.data)
            this.setState({
                ["modules"]: res.data
            })
            return res.data
        }).catch(err => {
          console.log(err)
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