import React from "react"
import home from "../../assets/images/portfolio_home.png"
import background from "../../assets/images/portfolio_background.png"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import classes from './Home.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import RoleGenerator from "../../component-lib/RoleGenerator.tsx";
import { getLinkFromLinks } from "../../utils/helperFunctions.ts";


const Home = () =>{
    const {data} = useSelector((state:RootState) => state.data)
    const staticData = data?.home
    const links = data?.externalLinks
    const buttonStaticData = data?.buttons

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
                    <a aria-label={links ?links[1]?.name:""} href={getLinkFromLinks(links,links ?links[1]?.name:"")} target="_blank" rel="noreferrer"><FaGithub className={classes.icon} /></a>
                    <a aria-label={links ?links[0]?.name:""} href={getLinkFromLinks(links,links ?links[0]?.name:"")} target="_blank" rel="noreferrer"><FaLinkedin className={classes.icon} /></a>
                </div>
                <div className={classes.homeButtonContainer}>
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