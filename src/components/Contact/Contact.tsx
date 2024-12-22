import React,{useState} from "react";
import classes from "./Contact.module.css";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import Footer from "../Footer/Footer"
import { socialLinks } from "../../utils/dummyData.ts";

const Contact = () =>{
    const  [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        event.preventDefault()
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
          const response = await fetch('https://script.google.com/macros/s/11xnw_9JMpOW3YWnnLmbDiP5xnh4pTgXuiXpReTysK9ltmXqA-r-anx_RE/exec', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message
            })
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const result = await response.json();
          console.log('Form submitted successfully:', result);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      

    return (
        <div id="contact" className={`${classes.contactContainer} scrollSection`}>
          <div style={{display:'flex'}}>
            <div className={classes.col1}>
                <h2>Contact Me</h2>
                <a href="mailTo:sureshragam@icloud.com">want to send a mail click here.</a>
                <div className={classes.iconsContainer}>
                  <a href={socialLinks.github} target="_blank" rel="noreferrer"><FaGithub className={classes.icon} /></a>
                  <a href={socialLinks.linkedIn} target="_blank" rel="noreferrer"><FaLinkedin className={classes.icon} /></a>
                </div>
            </div>
            <div className={classes.col2}>
                <form className={classes.form} onSubmit={(event) =>handleSubmit(event)}>
                    <input type="text" placeholder="Your Name" name="name" className={classes.inputField} onChange={handleChange} value={formData.name} required/>
                    <input type="mail" placeholder="Your Email" name="email" className={classes.inputField} onChange={handleChange} value={formData.email} required/>
                    <textarea placeholder="Your Message" name="message" className={classes.textField} onChange={handleChange} value={formData.message} required/>
                    <button type="submit" className={classes.submitButton}>Submit</button>
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact