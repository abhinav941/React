import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:'https://burger-f9325.firebaseio.com/'
})

export default axiosInstance