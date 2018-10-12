import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      profile: props.profile
    };
  }

  getProfileData = (event) => {
    axios.get(`http://localhost:3010/Profile/`)
      .then(res => {
        console.log('entra') //this.setState({user: res.data})
      })
      .catch( error => console.log(error))
  }
 
  render() {
   
    return (
      <div>
        <h1>
          Welcome to your <em>ReadMe!</em> profile
        </h1>

        <Link to='/edit'>Edit your profile!</Link>
        <br></br>
        <Link to='/publicprofile'>See your public info!</Link>

      </div>
    );
  }
}

export default Profile;
