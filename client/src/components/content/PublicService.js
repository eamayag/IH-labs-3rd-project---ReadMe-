import axios from 'axios';
require('dotenv').config()

class PublicService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api/publicprofile`,
      withCredentials: true
    });
  }
  //rutas del back donde el front solicitará la info
  getPublicProfile = (id) => {
    return this.service.get(id)
    .then(response => response.data)
    .catch(err => console.log(err))
  }

}

export default PublicService; 