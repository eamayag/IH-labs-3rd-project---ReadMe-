import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProfileService from "./ProfileService";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '', 
      email: '', 
      dateOfBirth: '', 
      address: '', 
      city: '', 
      contactname: '',
      relationshipcontact: '',
      contactphone: '',
      bloodGroup: '',
      allergies: '',
      diagnosis: '',
      drug: '',
      administration: '',
      ambulance: '',
      additionalInfo: '',
      user: props.user};
    this.service = new ProfileService();
  }

  componentWillReceiveProps() {
    this.setState({
      name: '', 
      email: '', 
      dateOfBirth: '', 
      address: '', 
      city: '', 
      contactname: '',
      relationshipcontact: '',
      contactphone: '',
      bloodGroup: '',
      allergies: '',
      diagnosis: '',
      drug: '',
      administration: '',
      ambulance: '',
      additionalInfo: '',
    }, function() {
      this.service.getProfile()
      .then((response) => {
        this.setState({
          name: response.user.name, 
          email: response.user.email, 
          dateOfBirth: response.user.dateOfBirth, 
          address: response.user.address, 
          city: response.user.city, 
          contactname: response.user.contactname,
          relationshipcontact: response.user.relationshipcontact,
          contactphone: response.user.contactphone,
          bloodGroup: response.user.bloodGroup,
          allergies: response.user.allergies,
          diagnosis: response.user.diagnosis,
          drug: response.user.drug,
          administration: response.user.administration,
          ambulance: response.user.ambulance,
          additionalInfo: response.user.additionalInfo,
        })
      })
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
  }

  updateProfile = () => {
    this.service.updateProfile(this.state.name, this.state.email, this.state.dateOfBirth, this.state.address,
      this.state.city, this.state.contactname, this.state.relationshipcontact, this.state.contactname,
      this.state.relationshipcontact, this.state.contactphone, this.state.bloodGroup, this.state.allergies,
      this.state.diagnosis, this.state.drug, this.state.administration, this.state.ambulance, this.state.additionalInfo) 
  }

   render() {
    return (
      <div>
        <h3>{this.state.username} profile info</h3>
        <p>This is the info that your NFC card will show.</p><Link to='/edit'>Anything to update? (Click here!)</Link>
        <h4>
          Your personal info:
        </h4>
        <ol>
          <li>Name: {this.state.name}</li>
          <li>email: {this.state.user.email}</li>
          <li>Date of birth: {this.state.dateOfBirth}</li>
          <li>Address: {this.state.address}</li>
          <li>City: {this.state.city}</li>
        </ol>

        <h4>
          Your emergency contact:
        </h4>
        <ol>
          <li>Name: {this.state.contactname}</li>
          <li>is your... {this.state.relationshipcontact}</li>
          <li>Phone: {this.state.contactphone} </li>
        </ol>

        <h4>
          Your medical info:
        </h4>
        <ol>
          <li>Blood group: {this.state.bloodGroup}</li>
          <li>Allergies: {this.state.allergies}</li>
          <li>Disease: {this.state.diagnosis} </li>
        </ol>

        <h4>
          Your treatment info:
        </h4>
        <ol>
          <li>I need this medication: {this.state.drug}</li>
          <li>It must be administered in this way: {this.state.administration}</li>
          <li>I need an ambulance: {this.state.ambulance} </li>
          <li>Additional info: {this.state.additionalInfo} </li>
        </ol>

        <Link to={"/publicprofile/" + this.state.user._id}>See how others will see your profile</Link>
        <br></br>

      </div>
    );
  }
}
  
export default Profile;

