import React from 'react'
import { WiDirectionUpRight } from "react-icons/wi"
import classes from './Projects.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import Ugaoo from '../../assets/portfolio-images/desktop-view.png'
import Food_Munch from '../../assets/portfolio-images/foodmunch.jpg'


const Projects = () =>{
    const {data} = useSelector((state:RootState) => state.data)
    const staticData = data?.projects

    const handleClickIcon = (path:string) =>{
        window.open(path, "_blank")
    }
    return(
        <div className={`${classes.projects} scrollSection`}>
            <h2>{staticData?.title}</h2>
            <ul>
                {staticData?.projects.map((eachProject) =>{
                    console.log(`${eachProject.name.split(" ").join("_")}`,"checking")
                    return <li key={eachProject.id} style={{backgroundImage:`url(${eachProject.name==="Ugaoo"?Ugaoo:Food_Munch})`}}>
                        <h3>{eachProject.name}</h3>
                        <p>{eachProject.description}</p>
                        <span className={classes.icon} role='button' onKeyDown={
                            () =>handleClickIcon(eachProject.url)
                        } onClick={() =>{handleClickIcon(eachProject.url)}}>
                            <WiDirectionUpRight color='white' fontSize='4rem' />
                        </span>
                        
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Projects