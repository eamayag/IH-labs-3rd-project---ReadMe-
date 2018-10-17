import axios from 'axios';

class PublicService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3001/publicprofile',
      withCredentials: true
    });
  }
  //rutas del back donde el front solicitará la info
  getPublicProfile = (id) => {
    return this.service.get(id)
    .then(response => {console.log(response); return response.data})
    .catch(err => console.log(err))
  }

}

export default PublicService; 