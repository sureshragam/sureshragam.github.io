import React from "react"
import classes from "./Header.module.css"

const Header = () =>{
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Portfo<span>lio</span></h1>
            <ul className={classes.navigation}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#certificates">Certificates</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header