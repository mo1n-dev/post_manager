import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

// getting all the posts from json file
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// get specific post
const getPost = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

// deleting a post
const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
}

// creating a new post
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

// updating a post 
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}


const postsService = {
    getAll,
    getPost,
    remove,
    create,
    update
}

export default postsService