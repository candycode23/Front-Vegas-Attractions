import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as vegasAttractionService from '../services/VegasAttractionsServices';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    } from '@mui/material';

export const VegasAttractionsTable = () => {
    const [vegasAttractions, setVegasAttractions]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        requestDataFromApi();
    }, []);

    function requestDataFromApi(){
        vegasAttractionService.getAllVegasAttractions()
        .then(res => {
            setVegasAttractions(res.data);
        })
    }

    function goToUpdate(id){
        navigate(`/update/${id}`);
    }

    function deleteVegasAttraction (id){
        vegasAttractionService.deleteVegasAttraction(id)
        .then(()=>{
            requestDataFromApi();
        })
    }

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        POI
                    </TableCell>
                    <TableCell>
                        Date Range
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        vegasAttractions.map((vegasAttractions)=> {
                            return(
                                <TableRow
                                    hover
                                    key={vegasAttractions.id}
                                >
                                    <TableCell>
                                        {vegasAttractions.id}
                                    </TableCell>
                                    <TableCell>
                                        {vegasAttractions.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {vegasAttractions.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {vegasAttractions.email}
                                    </TableCell>
                                    <TableCell>
                                        {vegasAttractions.POI}
                                    </TableCell>
                                    <TableCell>
                                        {vegasAttractions.dateRange}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(vegasAttractions.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteVegasAttraction(vegasAttractions.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}