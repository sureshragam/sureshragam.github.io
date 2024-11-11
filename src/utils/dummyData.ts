import {v4 as uuidV4} from 'uuid';
import { FaReact,FaHtml5,FaCss3,FaJava,FaPython } from "react-icons/fa";
import { SiSqlite,SiJavascript } from "react-icons/si";

interface ObjectGeneratorProps {
  id?:string,
  name?:string,
  icon?:any,
  description?:string,
  url?:string,
}


function ObjectGenerator ({id=uuidV4(),name,icon,description,url,}:ObjectGeneratorProps) {
    this.id=id;
    this.name=name;
    this.icon=icon;
    this.description=description;
    this.url=url;
}

export const scrollSkillsData = [
    new ObjectGenerator({name:"react",icon:FaReact}),
    new ObjectGenerator({name:"html",icon:FaHtml5}),
    new ObjectGenerator({name:"css",icon:FaCss3}),
    new ObjectGenerator({name:"javascript",icon:SiJavascript}),
    new ObjectGenerator({name:"python",icon:FaPython}),
    new ObjectGenerator({name:"java",icon:FaJava}),
    new ObjectGenerator({name:"sql",icon:SiSqlite}),
  ]


export const certificatesData = [
    new ObjectGenerator({name:"React",description:"someting"}),
    new ObjectGenerator({name:"HTML",description:"someting"}),
    new ObjectGenerator({name:"CSS",description:"someting"}),
    new ObjectGenerator({name:"JAVASCRIPT",description:"someting"})
]

export const skills ={
  frontend:"HTML,CSS,JAVASCRIPT,BOOTSTRAP,JAVASCRIPT",
  backend:"Python, JavaScript, Node.js",
  frontendFramework:"React, NPM",
  backendFramework:"Express",
  databases:'sqlite,'
}

export const experience = [
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

export const socialLinks = {
  github:"https://github.com/sureshragam",
  linkedIn:"https://www.linkedin.com/in/suresh-ragam/"
}

export const about = {
  description:'Accomplished AWS Certified Cloud Practitioner with a perfect score of 1000 out of 1000 marksFamiliar with React JS components, Forms, Events, Hooks, Router, context-API, Redux, and redux-toolkit.Knowledge of various technologies including React JS, Next JS, Java, Python, HTML, CSS, JavaScript, and SQL.Skilled in utilizing Git and GitHub for version control and collaboration.Looking for better exposure and gain knowledge. Good communication skills Ability to work under pressure as well as with team members and colleagues.'
}