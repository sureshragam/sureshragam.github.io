import {v4 as uuidV4} from 'uuid';
import { FaReact,FaHtml5,FaCss3,FaJava,FaPython } from "react-icons/fa";
import { SiSqlite,SiJavascript } from "react-icons/si";
import ugaooClone from '../assets/portfolio-images/desktop-view.png'
import foodMunch from '../assets/portfolio-images/foodmunch.jpg'
interface ObjectGeneratorProps {
  id?:string,
  name?:string,
  icon?:any,
  description?:string,
  url?:string,
  image?:string,
  path?:string
}


function ObjectGenerator ({id=uuidV4(),name,icon,description,url,image,path}:ObjectGeneratorProps) {
    this.id=id;
    this.name=name;
    this.icon=icon;
    this.description=description;
    this.url=url;
    this.image=image
    this.path=path
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
    new ObjectGenerator({name:"Aws",description:"Aws certifiedcloud practioner", image:'https://sragamimages.s3.ap-south-1.amazonaws.com/portfolio/Aws_certificate.png'}),
    new ObjectGenerator({name:"Python HackerRank Certified",description:"Demonstrates my proficiency in Python, covering problem-solving, data structures, and algorithms.",image:'https://sragamimages.s3.ap-south-1.amazonaws.com/portfolio/hackerankPython.png'}),
]

export const  projectsData =[
  new ObjectGenerator({name:'Ugaoo',path:"ugaoo-clone",description:'Ugaoo is an online plant nursery that sells a variety of plants, gardening supplies, and accessories:',image:ugaooClone}),
  new ObjectGenerator({name:'Food Munch',path:"foodmunch",description:'something',image:foodMunch}),
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
      period:"2021 - 2022",
      id:uuidV4()
  
  },
  {
  company:'Tata Consutancy Services',
  designation:"Assistant System Engineer",
  role:'React Developer',
  period:"2022 - Current",
  id:uuidV4()
  },
]


export const about = {
  description:"AWS Certified Cloud Practitioner with a perfect score of 1000/1000, showcasing a strong foundation in cloud computing principles.\nExperienced React Developer and a key team member working in Agile methodology, proficient in building scalable and maintainable web applications. Successfully developed core functionalities from scratch, including file upload, download, updates, and implementing portal and central notifications.\nSkilled in modern front-end technologies and frameworks, including React JS, Next JS, and expertise with Forms, Events, Hooks, Router, Context API, Redux, and Redux Toolkit.\nBroad technical knowledge in Java, Python, HTML, CSS, JavaScript, and SQL. Adept at using Git and GitHub for version control and effective collaboration.\nDriven by a passion for continuous learning and professional growth. Recognized for strong communication skills, the ability to perform under pressure, and thriving in collaborative team environments."}