import axios from "axios";
let service = axios.create({
    baseURL:" http://localhost:3000",  //基础
    timeout:2000
})
export default service