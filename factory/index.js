import axios from 'axios'

const base_url = 'https://api.weatherstack.com/current'

const key = process.env.REACT_APP_API_KEY

axios.get(`https://api.weatherstack.com/current?access_key=${key}&query=New York`)