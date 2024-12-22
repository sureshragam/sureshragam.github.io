import React from "react";
import classes from './certificates.module.css';
import { certificatesData } from "../../utils/dummyData.ts";

const Certificates:React.FC = () =>{
    return (
        <div id="certificates" className={`${classes.certificatesContainer} scrollSection`}>
            <h2 className={classes.title}>My Certificates</h2>
            <ul className={classes.certificates}>
                {certificatesData.map(eachCertificate =>{
                    return <li className={classes.certificate} key={eachCertificate.id}>
                        <h3>{eachCertificate.name}</h3>
                        <p>{eachCertificate.description}</p>
                    </li>
                })}

            </ul>
        </div>
    )
}

export default Certificates