import { Button,Typography } from '@mui/material'
import React, { useState } from 'react'

const Doubt = () => {
    var [Pname,setPname]=useState("");
    const ChangeName= ()=>{
      console.log("Clicked");
      setPname(" to Home Page")
  }
  const ChangeGname= ()=>{
    console.log("Clicked");
    setPname(" to Gallery page")
}
const ChangeCname= ()=>{
  console.log("Clicked");
  setPname(" to Contact page")
}
  return (
    <div>
        
        <Button variant="contained" onClick={ChangeName} color="warning">Home</Button>
        <br/>
        <br/>
        <Button variant="contained" onClick={ChangeGname} color="secondary">GALLERY</Button>
        <br/>
        <br/>
        <Button variant="contained" onClick={ChangeCname}color="success">CONTACT</Button>
        <br/>
        <br/>
        <br/>
        <Typography variant='h3'>Welcome {Pname}</Typography>
    </div>
  )
}

export default Doubt