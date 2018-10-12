import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.profile
    };
  }

  // getProfileData() {
  //   // let url = `http://localhost:3010/Profile/${this.params}`;
  //   axios
  //     .get(url)
  //     .then(res => {
  //       this.setState({ profile: res.data });
  //       console.log(this.state.profile);
  //     })
  //     .catch(e => console.log("error in getting info"));
  // }

  render() {
   
    return (
      <div>
        <h1>
          Welcome to your <em>ReadMe!</em> profile
        </h1>

        <button>Edit your profile!</button>
        <Link to='/publicprofile'>See your public info!</Link>

      </div>
    );
  }
}

export default Profile;
