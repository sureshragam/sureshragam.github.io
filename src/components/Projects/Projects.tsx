import React from 'react'
import { projectsData } from '../../utils/dummyData.ts'
import { WiDirectionUpRight } from "react-icons/wi"
import classes from './Projects.module.css'
const BASEURL= "https://sureshragam.github.io/"


const Projects = () =>{

    const handleClickIcon = (path:string) =>{
        console.log("check",path)
        console.log("check",BASEURL+path)
        window.location.href=BASEURL+path
    }
    return(
        <div className={`${classes.projects} scrollSection`}>
            <h2>Projects</h2>
            <ul>
                {projectsData.map((eachProject) =>{
                    console.log("check",eachProject)
                    return <li key={eachProject.id} style={{backgroundImage:`url(${eachProject.image})`}}>
                        <h3>{eachProject.name}</h3>
                        <p>{eachProject.description}</p>
                        <span className={classes.icon} role='button' onClick={() =>{handleClickIcon(eachProject.path)}}>
                            <WiDirectionUpRight color='white' fontSize='4rem' />
                        </span>
                        
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Projects