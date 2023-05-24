import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apiget = () => {
    var[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
// setting variable
         setUsers(response.data)
        console.log(users)
    })
    .catch(err=>console.log(err)) 
    },[]
    )
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>e-mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((value,index)=>
                        {
                            return(
                                <TableRow>
                                    <TableCell>
                                        {value.name}
                                    </TableCell>
                                    <TableCell>{value.username}</TableCell>
                                    <TableCell>{value.email}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Apiget