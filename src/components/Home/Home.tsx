import React, { useEffect, useState } from "react"
import photo2 from "../../assets/images/photo2.png"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import classes from './Home.module.css'
import { socialLinks } from "../../utils/dummyData.ts";

const rolesData = [
    "FullStack Web Developer",
    "React Developer",
    'Front-End Developer',
    'Back-End Developer'
]

const Home = () =>{
    const [role,setRole] =useState<any>(rolesData[0])
    const [currentIndex,setCurrentIndex] = useState<any>(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex) =>{
                const newIndex = (prevIndex+1)%rolesData.length
                setRole(rolesData[newIndex])
                return(newIndex)
            })
        },2000)
        return ()=> clearInterval(interval)
    },[])
    console.log(currentIndex)

    return(
        <div id="home" className={`${classes.homeContainer} scrollSection`}>
            <div className={classes.col1}>
                <p>Hi, Im </p>
                <p style={{fontSize: "clamp(1rem, 4rem, 10vw)"}}>Suresh <span style={{color:'var(--primaryColor)'}}>Ragam</span></p>
                <p className={classes.role}>{role}</p>
                <div className={classes.iconsContainer}>
                    <a href={socialLinks.github} target="_blank" rel="noreferrer"><FaGithub className={classes.icon} /></a>
                    <a href={socialLinks.linkedIn} target="_blank" rel="noreferrer"><FaLinkedin className={classes.icon} /></a>
                </div>
            </div>
            <div className={classes.col2}>
                <img src={photo2} alt="profile"/>   
            </div>
        </div>
    )
}

export default Home