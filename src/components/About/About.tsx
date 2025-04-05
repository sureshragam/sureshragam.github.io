import React from "react"
import aboutImage from "../../assets/images/about_cartoon.png"
import classes from "./About.module.css"
import DOMPurify from 'dompurify'
import {useSelector } from "react-redux"
import { RootState } from "../../store/appStore";


const About = () =>{
    const {data}= useSelector(((state:RootState) => state.data))
    const staticData = data?.about

    return(
        <div id="about" className={`${classes.aboutContainer} scrollSection`}>
            <div className={classes.col1}>
                <img src={aboutImage} alt="pic2"/>
            </div>
            <div className={classes.col2}>
                <h2>{staticData?.title}</h2>
                <p dangerouslySetInnerHTML = {{
                        __html:DOMPurify.sanitize(staticData?.description.replace(/\n/g,'<br/>'))
                    }}>
                </p>

            </div>

        </div>

    )
}

export default About