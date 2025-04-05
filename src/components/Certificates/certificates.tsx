import React from "react";
import classes from './certificates.module.css';
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";

const Certificates:React.FC = () =>{

    const {data} = useSelector((state:RootState) => state.data)
    const staticData = data?.certifcates

    return (
        <div id="certificates" className={`${classes.certificatesContainer} scrollSection`}>
            <h2 className={classes.title}>{staticData?.title}</h2>
            <ul className={classes.certificates}>
                {staticData?.certificates.map(eachCertificate =>{
                    return <li className={classes.certificate} key={eachCertificate.name}>
                        <img src={eachCertificate.url} alt={eachCertificate.alt} />
                    </li>
                })}

            </ul>
        </div>
    )
}

export default Certificates