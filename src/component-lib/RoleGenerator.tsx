import React, { useState, useEffect } from 'react';

const styles = {
    role: {
    },
  };



const RoleGenerator = ({roles}) => {
    const [role,setRole] =useState<any>("React Developer");
    const [currentIndex, setCurrentIndex] = useState<any>(0);


    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % roles?.length;
                setRole(roles?roles[newIndex]:'React Developer');
                return newIndex;
            });
        },3000)
        return ()=> clearInterval(interval)
    },[])

    console.log(currentIndex)
    return (
        <p style={styles.role}>{role}</p>
    )
}

export default RoleGenerator;