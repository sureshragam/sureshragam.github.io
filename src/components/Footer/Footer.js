import classes from './Footer.module.css'
import ScrollComponent from '../../component-lib/ScrollComponent.tsx'
import { scrollSkillsData } from '../../utils/dummyData.ts'

const Footer =() =>{
    return(
        <footer className={`${classes.footer}`}>
            <ScrollComponent data={scrollSkillsData} animationDuration={30}/>
        </footer>
    )
}

export default Footer