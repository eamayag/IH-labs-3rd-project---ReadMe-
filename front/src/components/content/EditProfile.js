import React, { Component } from "react";
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      username: '',
      // role: '',
      email: ''
    };
    this.connection = axios.create({
      baseURL: 'http://localhost:3001/profile',
      withCredentials: true
    })
  }


  editUser = (username,email,id) => {
    console.log('wefwef')
    return this.connection.post("/profile/:id",{username,email})
    .then(response =>console.log(response))
   }



  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, email,id } = this.state;

  //   this.connection.post('/', {username, email})
  //   .then(response => {
  //     this.setState({
  //       username: this.state.username,
  //       email: this.state.email
  //     })
  //   })
  //   .catch (error => console.log(error))
  // }

  this.connection.editUser(username,email,id)
  .then(response => {
    this.setState({
      username:"",
      email:"",
      id:""
    })
    this.props.getUser(response.user)
    .then(user =>this.setState({id:user._id}))
  })
.catch(err => console.log(err))
  }

  
  handleChange = (event) => {  
    const {name, email} = event.target;
    this.setState({[name]: email});
  }

  render() {
   console.log(this.state);
    return (
      <div>
        <h1>
          Edit your <em>ReadMe!</em> profile
        </h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type='text' name='username' placeholder='name' value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <br></br>
          
          <label>email:</label>
          <input type='text' name='email' placeholder='email' value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <br></br>

          {/* <label>Are you a caregiver?</label>
          <input type="checkbox" name="role" checked={this.state.role} onChange={ e => this.handleChange(e)}/>
          <br></br> */}

          <input type='submit' value='Submit'/>
        </form>

      </div>
    );
  }
}

export default Edit;
