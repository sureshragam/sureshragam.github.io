import React from "react";
import classes from './certificates.module.css';
import { certificatesData } from "../../utils/dummyData.ts";

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