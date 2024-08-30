import React, { useState } from "react"
import pic2 from "../../assets/images/pic2.jpg"
import classes from "./About.module.css"

const skills ={
    frontend:"HTML,CSS,JAVASCRIPT,BOOTSTRAP,JAVASCRIPT",
    backend:"Python, JavaScript, Node.js",
    frontendFramework:"React, NPM",
    backendFramework:"Express",
    databases:'sqlite,'
}
const experience = [
    {
        company:'Refining Design',
        designation:"Civil Enginner",
        role:'Site Engineer',
        period:"2021 - 2022"
    
    },
    {
    company:'Tata Consutancy Services',
    designation:"Assistant System Engineer",
    role:'React Developer',
    period:"2022 - Current"
    },
]


const About = () =>{
    const [activeTab,setActiveTab] = useState<any>(0)

    const generateAboutData =(value) =>{
        if(value==1){
            return(
                <div style={
                    {display:'flex'}
                }>
                    {experience.map(obj =>{
                        return <div style={
                            {borderColor:"gray",borderStyle:"solid",width:"200px",boxShadow:'1px 0.5px 1px 0px white',padding:'5px'}
                            }>
                                    <p>{obj.role}</p>
                                    <p>{obj.designation}</p>
                                    <p>{obj.company}</p>
                                    <p>{obj.period}</p>
                                </div>
                    })
                    }
                </div>
            )
        }
        else if(value==2){
            return(
                <div>
                    <h2>option-3</h2>
                </div>
            )
        }else{
            return(
                <div>
                    <h3>Front-End Languages</h3>
                    <p>{skills.frontend}</p>
                    <h3>Front-End Frameworks & Libraries</h3>
                    <p>{skills.frontendFramework}</p>
                    <h3>Back-End Languages</h3>
                    <p>{skills.backend}</p>
                    <h3>Back-End Frameworks & Libraries</h3>
                    <p>{skills.backendFramework}</p>
                    <h3>Databases</h3>
                    <p>{skills.databases}</p>
                </div>
            )
        }
    }

    const onClickTab= (value:number) =>{
        setActiveTab(value)
    }

    return(
        <div id="about" className={classes.aboutContainer}>
            <div className={classes.col1}>
                <img src={pic2} alt="pic2"/>
            </div>
            <div className={classes.col2}>
                <h1>About Me</h1>
                <p>I am Suresh, I have done my graduation in Civil engineering stream from Nalla Malla Reddy Engineering College
                    I have knowledge on web development, which is based on HTML and CSS, Bootstrap, JavaScript and also programming language like Python, C language etc.
                </p>
                <div className={classes.buttonContainer}>
                    <button onClick={() =>onClickTab(0)}>Skills</button>
                    <button onClick={() =>onClickTab(1)}>Experience</button>
                    <button onClick={() =>onClickTab(2)}>Education</button>
                </div>
                {generateAboutData(activeTab)}
            </div>

        </div>
    )
}

export default About