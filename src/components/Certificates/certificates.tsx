import React from "react"
import {v4 as uuidv4} from 'uuid'
import classes from './certificates.module.css'

function Certificate (name:string,description:string,url:string,id:string) {  //Object constructor function
    this.name=name;
    this.description=description;
    this.url=url;
    this.id=id
}

const certificatesData = [
    new Certificate("React","someting","",uuidv4()),
    new Certificate("HTML","someting","",uuidv4()),
    new Certificate("CSS","someting","",uuidv4()),
    new Certificate("JAVASCRIPT","someting","",uuidv4())
]

const Certificates:React.FC = () =>{
    return (
        <div id="certificates" className={classes.certificatesContainer}>
            <h1 className={classes.title}>My Certificates</h1>
            <ul className={classes.certificates}>
                {certificatesData.map(eachCertificate =>{
                    return <li className={classes.certificate} key={eachCertificate.id}>
                        <h1>{eachCertificate.name}</h1>
                        <p>{eachCertificate.description}</p>
                    </li>
                })}

            </ul>
        </div>
    )
}

export default Certificates