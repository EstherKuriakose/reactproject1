import { Table,TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablex = () => {
    var names=[{name:"Tiya",age:10},{name:"Meera",age:10},{name:"Treesa",age:11}]
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red", fontFamily:"cursive",fontSize:"30px" }}>Name</TableCell>
                        <TableCell style={{color:"red", fontFamily:"cursive",fontSize:"30px" }}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.age}</TableCell>
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

export default Tablex
