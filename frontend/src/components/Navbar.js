import { Component } from "react"
import { FaHome, FaSave, FaInfoCircle, FaBook } from "react-icons/fa"
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="logo">Project Scheduler</h1>
                <ul className="nav-menu">
                    <li>
                        <a className="nav-links" href="index.html">
                            <FaHome/> Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" href="index.html">
                            <FaSave/> Saved Timetables
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" href="index.html">
                            <FaBook/> Past Modules
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" href="/modules">
                            <FaInfoCircle/> All Modules
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar