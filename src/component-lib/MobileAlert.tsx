import React, { useEffect } from "react"
import { useState } from "react"
import { Alert, Snackbar } from "@mui/material"

const MobileAlert = () =>{
    const [open,setOpen]=useState(true)

    const handleResize =() =>{
        if (window.innerWidth< 1024){
            setOpen(true)
        }else{
            setOpen(false)
        }
    }

    useEffect(() =>{
        handleResize()
        window.addEventListener('resize',handleResize)

        return () => window.removeEventListener('resize',handleResize)
    },[])
    
    const handleClose = () =>{
        setOpen(false)
    }

    return(
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{vertical:'top',horizontal:'center'}}>
        <Alert onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}>This site is developed for desktop view. For a better experience, please view it on a desktop.</Alert>
        </Snackbar>
    )
}

export default MobileAlert