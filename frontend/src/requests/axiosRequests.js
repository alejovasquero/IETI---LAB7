import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://ieti-lab7-create.azurewebsites.net/api/',
    withCredentials: false
});


const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
}
export const get = (path, data, params) => {
    return new Promise((resolve, reject) => {
        instance.get(path, data, config)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const post = (path, data, params) => {
    return new Promise((resolve, reject) => {
        instance.post(path, data, config)
            .then(res => {
                console.log(res)
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}