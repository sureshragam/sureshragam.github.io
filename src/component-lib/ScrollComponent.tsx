import React from "react"
import classes from "./ScrollComponent.module.css"
import { IconType } from "react-icons/lib"

interface SkillData {
    id?:string,
    name?:string,
    icon?:IconType
}

interface ScrollComponentProps {
    data:SkillData[],
    animationDuration:number
}

const ScrollComponent:React.FC<ScrollComponentProps> = ({data,animationDuration}) =>{

    return(
        <div className={classes.skillScroll} >
          {data.map((eachSkill,index) =>{
            return <div key={eachSkill.id} className={classes.skill} style={{
              animationDuration: `${animationDuration}s`,
              animationDelay: `calc(${animationDuration}s / ${data?.length} * ${index} * -1)`,
            }}>{React.createElement(eachSkill.icon,{fontSize:'2rem',color:'var(--primaryColor,"red")'})}<span>{eachSkill.name}</span></div>
          })}
        </div>
    )
}

export default ScrollComponent