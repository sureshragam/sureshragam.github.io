import React, { useEffect, useState } from "react"
import pic1 from "../../assets/images/pic1.jpg"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import classes from './Home.module.css'

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
        },5000)
        return ()=> clearInterval(interval)
    },[])


    return(
        <div className={classes.homeContainer}>
            <div className={classes.col1}>
                <h4>Hi, Im</h4>
                <h1>Suresh <span>Ragam</span></h1>
                <h2 className={classes.role}>{role}</h2>
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