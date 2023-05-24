import React from 'react'
import { TextField, Typography } from '@mui/material';
const First = () => {
  return (
    <div><h1>Esther Kuriakose</h1>
    <input placeholder='NAME'></input>
    <br>
    </br>
    <br></br>
    <input type='password'placeholder='password'></input>
    <br/>
    <br/>
    <button>SUBMIT</button>
    <br/>

    <Typography variant='h1'> ESTHER KURIAKOSE</Typography>
    <br/>
    <TextField variant='outlined' label='Name'></TextField>
    <br/>
    <br/>
    <TextField variant='standard' label='Password'></TextField>
    <br/><br/>
    <TextField variant ='filled' label='e-mail id'></TextField>
</div>
  )
}

export default First