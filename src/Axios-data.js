import Axios from "axios";

const axiosInstance =  Axios.create({
    baseURL: 'https://myportfolio-ea935.firebaseio.com/'
});

export default axiosInstance;