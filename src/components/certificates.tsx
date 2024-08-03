import React from "react"
import classes from './certificates.module.css'

const certificatesData = [
    {name:'HTML & CSS',
        description:"some content",
        url:""
    },
    {name:'Python',
        description:"some content",
        url:""
    },
    {name:'AWS',
        description:"some content",
        url:""
    },
    {name:'HTML & CSS',
        description:"some content",
        url:""
    },
    {name:'Python',
        description:"some content",
        url:""
    },
    {name:'AWS',
        description:"some content",
        url:""
    },
]

const Certificates = () =>{
    return (
        <div className={classes.certificatesContainer}>
            <h1 className={classes.title}>My Certificates</h1>
            <ul className={classes.certificates}>
                {certificatesData.map(eachCertificate =>{
                    return <li className={classes.certificate}>
                        <h1>{eachCertificate.name}</h1>
                        <p>{eachCertificate.description}</p>
                    </li>
                })}

            </ul>
        </div>
    )
}

export default Certificates