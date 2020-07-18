import axios from 'axios'

const API_KEY = '1689c6c638f63700f355cfbb6c9a5c62'

//Todo: get some config from user preferences
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'es-AR',
    region: 'AR'
  }
})

export default instance
