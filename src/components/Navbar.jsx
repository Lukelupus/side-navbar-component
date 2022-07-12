import React from "react"
import brand from "../assets/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';




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
                        <HomeIcon className="icon" />
                        <span className="link-text"></span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <AccountCircleIcon className="icon"/>
                        <span className="link-text"></span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <MenuBookIcon className="icon" />
                        <span className="link-text"></span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <SettingsIcon className="icon" />
                        <span className="link-text"></span>
                    </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar