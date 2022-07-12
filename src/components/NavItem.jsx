import React from "react"
import { useMatch, useResolvedPath } from "react-router-dom";



function NavItem({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active nav-item" : "nav-item"}>
        <a className="nav-link" to={to} {...props}>
            {children}
        </a>
    </li>
    )
}


export default NavItem;