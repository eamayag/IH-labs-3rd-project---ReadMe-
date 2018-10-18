import axios from 'axios';
require('dotenv').config()

class ProfileService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/profile`,
      withCredentials: true
    });
  }
  //rutas del back donde el front solicitará la info
  getProfile = () => {
    return this.service.get('/')
    .then(response => response.data)
    .catch(err => console.log(err))
  }

  updateProfile = (data) => {
    return this.service.post('/', {data})
    .then(response => response.data)
  }

  deleteProfile = () => {
    return this.service.delete('/:id',)
    .then(response => response.data)
  }
}

export default ProfileService;