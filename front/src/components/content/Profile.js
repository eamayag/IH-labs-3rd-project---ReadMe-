import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProfileService from "./ProfileService";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', dateOfBirth: '', user: props.user};
    this.service = new ProfileService();
  }

  componentWillReceiveProps() {
    this.setState({
      email: '',
      dateOfBirth: ''
    }, function() {
      this.service.getProfile()
      .then((response) => {
        this.setState({
          email: response.user.email,
          dateOfBirth: response.user.dateOfBirth
        })
      })
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
  }

  updateProfile = () => {
    this.service.updateProfile(this.state.email, this.state.dateOfBirth)
  }

   render() {
    return (
      <div>
        <Link to='/edit'>Edit your profile!</Link>
        {/* render={() => <Profile user={this.state.loggedInUser} */}
        <Link to={"/publicprofile/" + this.state.user._id}>See your public info!</Link>
        <br></br>

        <h1>
          Your <em>ReadMe!</em> info as a {this.state.user.role}:
        </h1>
        <p>
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

// PREVIOUS ATTEMPT: FUNCTIONING
// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: props.user,
//       //profile: props.profile
//     };
//     this.connection = axios.create({
//       baseURL: 'http://localhost:3001',
//       withCredentials: true
//     })
//     this.getProfileData()
//   }

//   getProfileData = () => {
//     this.connection.get('/profile')
//       .then(res => {
//         this.setState({user: res.data})
//       })
//       .catch( error => console.log(error))
//   }
 
//   render() {
//     return (
//       <div>
//         <Link to='/edit'>Edit your profile!</Link>
//         {/* render={() => <Profile user={this.state.loggedInUser} */}
//         <br></br>
//         <Link to={"/publicprofile/" + this.state.user._id}>See your public info!</Link>

//         <h1>
//           Your <em>ReadMe!</em> info as a {this.state.user.role}:
//         </h1>
//         <p>
//           {this.state.user.profilePic}
//           Username: {this.state.user.username}
//           email: {this.state.user.email}
//           date of birth: {this.state.dateOfBirth}
//         </p>
//         <div>

//         </div>

       
//       </div>
//     );
//   }
// }

// export default Profile;
