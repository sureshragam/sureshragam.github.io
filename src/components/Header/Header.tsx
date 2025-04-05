import React from "react"
import classes from "./Header.module.css"
import { useSelector} from "react-redux"
import { RootState } from "../../store/appStore";

const Header = () =>{
    const {data} = useSelector((state:RootState) => state.data)
    const staticData = data?.navigation
    
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Portfo<span>lio</span></h1>
            <ul className={classes.navigation}>
                {staticData?.map((item) => (
                    <li key={item.name} className={classes.navItem}>
                        <a href={`#${item.url}`} className={classes.navLink}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header