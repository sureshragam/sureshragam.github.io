import React,{useState} from "react";
import classes from "./Contact.module.css";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import Footer from "../Footer/Footer"
import { IoArrowBackOutline } from "react-icons/io5";

const Contact = () =>{
    const  [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const [errors, setErrors] = useState({
      name: '',
      email: '',
      message: ''
    });

    const {REACT_APP_GITHUB_URL:github,REACT_APP_LINKEDIN_URL:linkedIn,REACT_APP_MAIL_ID:mailID} = process.env

    const validateForm = () => {
      const newErrors:{name:any,email:any,message:any} = {name:"",email:"",message:""};
      let formIsValid = true;
  
      // Name validation
      if (!formData.name) {
        newErrors.name = 'Name is required';
        formIsValid = false;
      }
  
      // Email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.email || !emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        formIsValid = false;
      }
  
      // Message validation
      if (!formData.message) {
        newErrors.message = 'Message is required';
        formIsValid = false;
      }
  
      setErrors(newErrors);
      return formIsValid;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        event.preventDefault()
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
          return;
        }
      
        try {
          const response = await fetch(" https://zep1f7tlgb.execute-api.ap-south-1.amazonaws.com/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name:formData.name,
              email:formData.email,
              message:formData.message,
            }),
          });
          const result = await response.json();
          if (response.ok) {
            setFormData({
              name: '',
              email: '',
              message: ''
            });
            alert("Your message has been sent successfully!");
          }
          console.log(result.message);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      

    return (
        <div id="contact" className={`${classes.contactContainer} scrollSection`}>
          <div style={{display:'flex'}}>
            <div className={classes.col1}>
                <h2>Contact Me</h2>
                <a href={`mailTo:${mailID}`}>want to send a mail click here.</a>
                <div className={classes.iconsContainer}>
                  <a href={github} target="_blank" rel="noreferrer"><FaGithub className={classes.icon} /></a>
                  <a href={linkedIn} target="_blank" rel="noreferrer"><FaLinkedin className={classes.icon} /></a>
                </div>
                <div style={{marginTop:"auto",display:'flex',alignItems:'center',justifyContent:'center'}} >
                  <IoArrowBackOutline color="#f9004d"/>
                  <a role="button" href='home' >Back to Home</a>
                </div>
            </div>
            <div className={classes.col2}>
                <form className={classes.form} onSubmit={(event) =>handleSubmit(event)}>
                    <input type="text" placeholder="Your Name" name="name" className={classes.inputField} onChange={handleChange} value={formData.name} required/>
                    <input type="mail" placeholder="Your Email" name="email" className={classes.inputField} onChange={handleChange} value={formData.email} required/>
                    <textarea placeholder="Your Message" name="message" className={classes.textField} onChange={handleChange} value={formData.message} required/>            
                    <button type="submit" className={classes.submitButton}>Submit</button>
                    {errors.name && <p className={classes.errorText}>*{errors.name}</p>}
                    {errors.email && <p className={classes.errorText}>*{errors.email}</p>}
                    {errors.message && <p className={classes.errorText}>*{errors.message}</p>}
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact