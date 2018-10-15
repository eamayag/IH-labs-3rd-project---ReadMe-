import React, { Component } from "react";
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      username: '',
      profilePic: '',
      email: '',
      role: '',
      dateOfBirth: '',
      phone: '',
      address: '',
      city: ''
    };

    this.connection = axios.create({
      baseURL: 'http://localhost:3001/profile',
      withCredentials: true
    })
  }
   
  //   this.connection.post('/', {username, email})
  //   .then(response => {
  //     this.setState({
  //       username: this.state.username,
  //       email: this.state.email
  //     })
  //   })
  //   .catch (error => console.log(error))
  // }

//   this.connection.editUser(username,email,id)
//   .then(response => {
//     this.setState({
//       username:"",
//       email:"",
//       id:""
//     })
//     this.props.getUser(response.user)
//     .then(user =>this.setState({id:user._id}))
//   })
// .catch(err => console.log(err))
//   }

// editUser = (username,email,id) => {
//   console.log('wefwef')
//   return this.connection.post("/profile/:id",{username,email})
//   .then(response =>console.log(response))
//  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({[name]: value})
  }

  handleChange = (event) => {  
    let {username, password, profilePic, email, role, dateOfBirth, phone, address, city } = event.target;    
  }

  render() {
    let { username, password, profilePic, email, role, dateOfBirth, phone, address, city } = this.state;
    return (
      <div>
        <h1>
          Edit your <em>ReadMe!</em> profile:
        </h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Profile photo:</label>
          <input type='file' name='profilePic' value={this.state.profilePic} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Name:</label>
          <input type='text' name='username' placeholder='name' value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Password:</label>
          <input type='password' name='password' placeholder='password' value={this.state.password} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>email:</label>
          <input type='email' name='email' placeholder='email' value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Role (type if you are here as a caregiver, or a patient):</label>
          <input type='search' name='role' value={this.state.role} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Date of birth:</label>
          <input type='number' name='dateOfBirth' value={this.state.dateOfBirth} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Phone:</label>
          <input type='tel' name='phone' value={this.state.phone} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Address:</label>
          <input type='text' name='address' value={this.state.address} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>City:</label>
          <input type='text' name='city' value={this.state.city} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }

}

export default Edit;
