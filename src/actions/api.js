import axios from 'axios'

const Http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json'
  }
})

export default Http
