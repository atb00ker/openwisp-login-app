import axios from 'axios'
import config from '../config'

export const login = (url, data) => {
    let formData = new FormData()
    formData.append('username', data.username)
    formData.append('password', data.password)
    return dispatch => {
        axios({
            method: 'post',
            url: url,
            data: formData
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
}