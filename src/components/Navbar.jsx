import React from "react"
import brand from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <a href="/">
                    <img className="logo" alt="logo" src={brand}></img>
                </a>
                <ul>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                    <FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />
                        <span className="link-text"></span>
                    </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar