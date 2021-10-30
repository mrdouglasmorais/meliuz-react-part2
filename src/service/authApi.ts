import axios from 'axios';

const register = axios.create({
  baseURL: 'https://sistemadeagendamento-san5v.ondigitalocean.app/'
})

export default register;