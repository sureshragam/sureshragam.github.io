import React from "react"
import pic1 from "../assets/images/pic1.jpg"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import classes from './Home.module.css'

const Home = () =>{
    return(
        <div className={classes.homeContainer}>
            <div className={classes.col1}>
                <h4>Hi, Im</h4>
                <h1>Suresh <span>Ragam</span></h1>
                <h2>Fullstack Web Developer</h2>
                <div className={classes.iconsContainer}>
                <FaGithub className={classes.icon} href=""/>
                <FaLinkedin className={classes.icon}/>
                </div>
            </div>
            <div className={classes.col2}>
                <img src={pic1} alt="profile"/>
            </div>

        </div>
    )
}

export default Home