import React, { Component } from "react";
import axios from 'axios'

class Public extends Component {
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
   
    if (this.state){
    return (
      <div>
        <h1>
          This is the public <em>ReadMe!</em> profile
        </h1>
        <h4>
          Personal info:
        </h4>
        <ol>
          <li>Name: {this.state.name}</li>
          <li>email: {this.state.email}</li>
          <li>Date of birth: {this.state.dateOfBirth}</li>
          <li>Address: {this.state.address}</li>
          <li>City: {this.state.city}</li>
        </ol>

        <h4>
          The emergency contact of {this.state.username}:
        </h4>
        <ol>
          <li>Name: {this.state.contactname}</li>
          <li>is his/her... {this.state.relationshipcontact}</li>
          <li>Phone: {this.state.contactphone} </li>
        </ol>

        <h4>
          Medical info of {this.state.username}:
        </h4>
        <ol>
          <li>Blood group: {this.state.bloodGroup}</li>
          <li>Allergies: {this.state.allergies}</li>
          <li>Disease: {this.state.diagnosis} </li>
        </ol>

        <h4>
          Treatment EMERGENCY info:
        </h4>
        <ol>
          <li>{this.state.username} needs this medication: {this.state.drug}</li>
          <li>It must be administered in this way: {this.state.administration}</li>
          <li>{this.state.username} needs you to call an ambulance: {this.state.ambulance} </li>
          <li>Additional info: {this.state.additionalInfo} </li>
        </ol>

        

      </div>
    );
    } else {
      return <h3>Loading...</h3>
    }
  }
}

export default Public;
