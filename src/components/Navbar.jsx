import React from "react"
import logo from "../assets/logo.png"


function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <a href="/">
                    <img className="logo" alt="logo" src={logo}></img>
                </a>
                <ul>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        
                        <span className="link-text"></span>
                    </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar