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
const experience = [{
    company:'TCS',
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
                <div>
                    <h1>option1</h1>
                </div>
            )
        }
        else if(value==2){
            return(
                <div>
                    <h1>option2</h1>
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