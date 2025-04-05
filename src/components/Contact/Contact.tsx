import React,{useState} from "react";
import classes from "./Contact.module.css";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import Footer from "../Footer/Footer"
import { IoArrowBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import NotifyUserComponent from "../../component-lib/NotifyUserComponent.tsx"
import { getLinkFromLinks } from "../../utils/helperFunctions.ts";

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
    const [open, setOpen] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {data} = useSelector((state:RootState) => state.data)
    const staticData = data?.Contact
    const buttonStaticData = data?.buttons
    const links = data?.externalLinks
    const {REACT_APP_MAIL_ID:mailID} = process.env
    
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
        setIsSubmitted(true)
        if (!validateForm()) {
          setIsSubmitted(false)
          return;
        }
      
        try {
          const response = await fetch(getLinkFromLinks(links,"contactform"), {
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
            setIsSubmitted(true)
            setFormData({
              name: '',
              email: '',
              message: ''
            });
            setAlertType("success")
            setMessage("Your message has been sent successfully!")
            setOpen(true)
          }
          console.log(result.message);
        } catch (error) {
          console.error('Error submitting form:', error);
          setMessage("Error submitting form, Please try again later or contact me directly using the email provided")
          setAlertType("error")
          setOpen(true)
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          
        }
        setIsSubmitted(false)
      };
      

    return (
        <div id="contact" className={`${classes.contactContainer} scrollSection`}>
          <NotifyUserComponent message={message} open={open} setOpen ={(value) =>setOpen(value)} alertType={alertType}/>
          <div style={{display:'flex'}}>
            <div className={classes.col1}>
                <h2>{staticData?.title}</h2>
                <p style={{paddingRight:'1rem'}}>{staticData?.description}</p>
                <a href={`mailTo:${mailID}`}>{staticData?.mailDescription}</a>
                <div className={classes.iconsContainer}>
                  <a href={getLinkFromLinks(links,links ?links[1]?.name:"")} target="_blank" rel="noreferrer"><FaGithub className={classes.icon} /></a>
                  <a href={getLinkFromLinks(links,links ?links[0]?.name:"")}  target="_blank" rel="noreferrer"><FaLinkedin className={classes.icon} /></a>
                </div>
                <div style={{marginTop:"auto",display:'flex',alignItems:'center',justifyContent:'center'}} >
                  <IoArrowBackOutline color="#f9004d"/>
                  <a role="button" href='#home' >{buttonStaticData?.backBtn}</a>
                </div>
            </div>
            <div className={classes.col2}>
                <form className={classes.form} onSubmit={(event) =>handleSubmit(event)}>
                    <input type="text" placeholder={staticData?.namelabel} name={staticData?.namelabel?.toLowerCase()} className={classes.inputField} onChange={handleChange} value={formData.name} required/>
                    <input type="mail" placeholder={staticData?.emaillabel} name={staticData?.emaillabel?.toLowerCase()} className={classes.inputField} onChange={handleChange} value={formData.email} required/>
                    <textarea placeholder={staticData?.messagelabel} name={staticData?.messagelabel?.toLowerCase()}className={classes.textField} onChange={handleChange} value={formData.message} required/>            
                    {!isSubmitted && <button type="submit" className={classes.submitButton}>{buttonStaticData?.submitBtn}</button>}
                    {isSubmitted && <button type="submit" className={classes.submitButton}>{"Sending...."}</button>}
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