import {VegasAttractionsTable} from "../components/VegasAttractionsTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";


export const VegasAttraction =() => {
    const navigate = useNavigate();

    function addVegasAttraction(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addVegasAttraction()}>Add User</Button>
            <VegasAttractionsTable />
        </>
    )
}
