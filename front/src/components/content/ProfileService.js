import axios from 'axios';

class ProfileService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3001/profile',
      withCredentials: true
    });
  }
  //rutas del back donde el front solicitará la info
  getProfile = (username, password) => {
    return this.service.get('/', {username, password})
    .then(response => response.data)
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