import React from "react"
import classes from "./Header.module.css"

const Header = () =>{
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Portfo<span>lio</span></h1>
            <ul className={classes.navigation}>
                <li>Home</li>
                <li>About</li>
                <li>Certificates</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header