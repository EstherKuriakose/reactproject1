import { AppBar, Button, Toolbar, Typography, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{paddingTop:"100px"}}>
        <AppBar>
            <Toolbar>
            <Typography color={'white'} align='left'variant="h3" component="div" sx={{flexGrow:1} }>NewApp</Typography>
                <Button  variant='text' color='warning'><Link to={'/'} style={{textDecoration:'none',color:"white"}}>Home</Link></Button>
                <Button  variant='text' color='warning'><Link to={'/first'}style={{textDecoration:'none',color:"white"}}>First</Link></Button>
                <Button  variant='text' color='warning'><Link to={'/tablex'} style={{textDecoration:'none',color:"white"}}>Tablex</Link></Button>
                <Button  variant='text' color='warning'><Link to={'/axios'} style={{textDecoration:'none',color:"white"}}>Apiget</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar