import axios from 'axios'

const axiosWithAuth = e =>{
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'http://localhost:5000',
        header: {
            authorization: token
        }
    })
}

export default axiosWithAuth