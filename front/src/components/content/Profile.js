import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      //profile: props.profile
    };
    this.connection = axios.create({
      baseURL: 'http://localhost:3001/',
      withCredentials: true
    })
    this.getProfileData()
  }

  getProfileData = () => {
    this.connection.get('/profile')
      .then(res => {
        this.setState({user: res.data})
      })
      .catch( error => console.log(error))
  }
 
  render() {
    return (
      <div>
        <Link to='/edit'>Edit your profile!</Link>
        {/* render={() => <Profile user={this.state.loggedInUser} */}
        <br></br>
        <Link to={"/publicprofile/" + this.state.user._id}>See your public info!</Link>

        <h1>
          Your <em>ReadMe!</em> info as a {this.state.user.role}:
        </h1>
        <p>
          {this.state.user.profilePic}
          Username: {this.state.user.username}
          email: {this.state.user.email}
          date of birth: {this.state.dateOfBirth}
        </p>
        <div>

        </div>

       
      </div>
    );
  }
}

export default Profile;
