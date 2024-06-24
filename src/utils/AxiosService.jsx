import axios from "axios";

let AxiosService=axios.create({
    baseURL:"https://663711df288fedf6937f54c3.mockapi.io",
    headers:{
        "Content-Type":"application/json"
    }

})
export default AxiosService