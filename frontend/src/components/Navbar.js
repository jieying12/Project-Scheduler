import { Component } from "react"
// import { FaHome, FaSave, FaInfoCircle, FaBook } from "react-icons/fa"
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <a href="#" className="logo">Scheduler</a>
        <ul className="nav-menu">
          <li>
            <a className="nav-links" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              My Timetables
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              My Modules
            </a>
          </li>
          <li>
            <a className="nav-links" href="/modules">
              All Modules
            </a>
          </li>
        </ul>
        <div class="icons">
          <a href="#"><i class='bx bx-log-out' ></i></a>
          {/* <div class="bx bx-menu" id="menu-icon"></div> */}
        </div>
      </nav>
    )
  }
}

export default Navbar