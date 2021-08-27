import axios from "axios";


const BASE_URL = "http://localhost:3001/utilization"


const getData = () => {
    return axios
        .get(BASE_URL)
}


export default {
    getData: getData
}