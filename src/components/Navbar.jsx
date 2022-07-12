import React from "react"
import NavItem from "./NavItem"
import logo from "../assets/logo.png"
import "./nav.css"

function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <a href="/">
                    <img className="logo" alt="logo" src={logo}></img>
                </a>
                <ul>
                    <NavItem to="/"></NavItem>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar