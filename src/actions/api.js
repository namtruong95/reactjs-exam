import axios from 'axios'

const Http = axios.create({
  baseURL: 'https://c2a-dev.calling.fun/api/v2',
  headers: {
    'content-type': 'application/json'
  }
});

export default Http
