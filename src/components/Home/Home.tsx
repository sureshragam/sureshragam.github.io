import React from "react"
import home from "../../assets/images/portfolio_home.png"
import background from "../../assets/images/portfolio_background.png"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import classes from './Home.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import RoleGenerator from "../../component-lib/RoleGenerator.tsx";


const Home = () =>{
    const {data} = useSelector((state:RootState) => state.data)
    const staticData = data?.home
    const buttonStaticData = data?.buttons

    const {REACT_APP_GITHUB_URL:github,REACT_APP_LINKEDIN_URL:linkedIn} = process.env

    const handleDownloadResume = () => {
        window.open(
          "https://sragamimages.s3.ap-south-1.amazonaws.com/portfolio/resume.pdf", 
          "_blank", 
          "noopener,noreferrer"
        );
      };
      
    return(
        <div id="home" className={`${classes.homeContainer} scrollSection`}>
            <div className={classes.col1}>
                <p>{staticData?.miniTitle}</p>
                <p style={{fontSize: "clamp(1rem, 4rem, 10vw)"}}>{staticData?.title.split(" ")[0]}<span style={{color:'var(--primaryColor)'}}> {staticData?.title.split(" ")[1]}</span></p>
                <RoleGenerator roles={staticData?.roles}/>
                <div className={classes.iconsContainer}>
                    <a href={github} target="_blank" rel="noreferrer"><FaGithub className={classes.icon} /></a>
                    <a href={linkedIn} target="_blank" rel="noreferrer"><FaLinkedin className={classes.icon} /></a>
                </div>
                <div style={{display:'flex',gap:'2rem',justifyContent:'center',marginTop:'2rem'}}>
                    <button  onClick={handleDownloadResume}>{buttonStaticData?.resumeBtn}</button>
                    <a role="button" href="#contact">{buttonStaticData?.contactBtn}</a>
                </div>
            </div>
            <div className={classes.col2}>
                <img src={background} alt="background solid"/>
                <img src={home} alt="profile"/>   
            </div>
        </div>
    )
}

export default Home