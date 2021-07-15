import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((resp) => {
        console.log(resp.data);
        return resp.data
    }
    )
    .catch(err => console.log('connection failed ', err))
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const del = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`).then(resp=>{
        return resp
    })
}
const noteService = {
    getAll: getAll,
    create: create,
    del: del
}

export default noteService