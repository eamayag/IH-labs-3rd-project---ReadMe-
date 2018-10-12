import React, { Component } from "react";
import axios from 'axios'

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.profile
    };
  }

  getProfileData() {
    let user = this.state.loggedInUser;
    axios
      .get(user)
      .console.log(user)
      .then(res => {
        this.setState({ profile: res.data });
        console.log(this.state.profile);
      })
      .catch(e => console.log("error in getting info"));
  }

  render() {
   
    return (
      <div>
        <h1>
          Edit your <em>ReadMe!</em> profile
        </h1>

      </div>
    );
  }
}

export default Edit;
