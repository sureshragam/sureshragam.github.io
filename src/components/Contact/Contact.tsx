import React,{useState} from "react";
import classes from "./Contact.module.css"
import { FaGithub,FaLinkedin } from "react-icons/fa";

const Contact = () =>{

    const [userName,setUserName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [message,setMessage] = useState<string>("")

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    return (
        <div className={classes.contactContainer}>
            <div className={classes.col1}>
                <h1>Contact Me</h1>
                <p><span>suresh.ragam@icloud.com</span></p>
                <div className={classes.iconsContainer}>
                <FaGithub className={classes.icon} href=""/>
                <FaLinkedin className={classes.icon}/>
                </div>
            </div>
            <div className={classes.col2}>
                <form className={classes.form} onSubmit={(event) =>handleSubmit(event)}>
                    <input type="text" placeholder="Your Name" name="name" className={classes.inputField} onChange={(event) =>setUserName(event?.target.value)} value={userName} required/>
                    <input type="mail" placeholder="Your Email" name="mail" className={classes.inputField} onChange={(event) =>setEmail(event.target.value)} value={email} required/>
                    <textarea placeholder="Your Message" name="message" className={classes.textField} onChange={(event) =>setMessage(event.target.value)} value={message} required/>
                    <button type="submit" className={classes.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact