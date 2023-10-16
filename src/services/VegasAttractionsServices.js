import axios from 'axios';

const VEGAS_BASE_API_URL = 'http://localhost:8080/api/v1/vegasAttractions';

export function getAllVegasAttractions(){
    return axios.get(VEGAS_BASE_API_URL);
}

export function createVegasAttraction(vegasAttraction){
    return axios.post(VEGAS_BASE_API_URL,vegasAttraction);
}

export function getById(id){
    return axios.get(`${VEGAS_BASE_API_URL}/${id}`);
}

export function updateVegasAttraction(id, vegasAttraction){
    return axios.put(`${VEGAS_BASE_API_URL}/${id}`, vegasAttraction);
}

export function deleteVegasAttraction(id){
    return axios.delete(`${VEGAS_BASE_API_URL}/${id}`);
}