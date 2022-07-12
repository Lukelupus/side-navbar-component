import React from "react"
import NavItem from "./NavItem"

function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="nav">
                <ul>
                    <NavItem to="/"></NavItem>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar