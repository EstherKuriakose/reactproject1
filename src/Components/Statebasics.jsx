import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [pname,setPname]=useState("Esther")
    var[val,setVal]=useState()

const changeName= ()=>{
    console.log("Clicked");
    setPname("Maya")
    setVal("")
}
const inputHandler =(e)=>{
    setVal(e.target.value);
    console.log(val)


}
  return (
    <div>
        <Typography variant='h4'>Hello {pname}</Typography><br/>
        <TextField variant='outlined' value={val} label="Name"onChange={inputHandler}/><br/>
        <Button variant="contained" onClick={changeName}>Change</Button>
    </div>
  )
}

export default Statebasics