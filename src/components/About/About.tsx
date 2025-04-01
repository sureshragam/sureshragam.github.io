import React from "react"
import aboutImage from "../../assets/images/about_cartoon.png"
import classes from "./About.module.css"
import { about} from "../../utils/dummyData.ts"
import DOMPurify from 'dompurify'


const About = () =>{

    return(
        <div id="about" className={`${classes.aboutContainer} scrollSection`}>
            <div className={classes.col1}>
                <img src={aboutImage} alt="pic2"/>
            </div>
            <div className={classes.col2}>
                <h2>About Me</h2>
                <p dangerouslySetInnerHTML = {{
                        __html:DOMPurify.sanitize(about.description.replace(/\n/g,'<br/>'))
                    }}>
                </p>

            </div>

        </div>

    )
}

export default About