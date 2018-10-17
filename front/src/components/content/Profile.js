import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ProfileService from "./ProfileService";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.service = new ProfileService();
  }
 
  componentDidMount() {

    this.service.getProfile()
    .then((response) => {
      this.setState({
        _id: response[0]._id,
        name: response[0].name,
        username: response[0].username, 
        email: response[0].email, 
        dateOfBirth: response[0].dateOfBirth,
        address: response[0].address, 
        city: response[0].city, 
        contactname: response[1].contactname,
        relationshipcontact: response[1].relationshipcontact,
        contactphone: response[1].contactphone,
        bloodGroup: response[2].bloodGroup,
        allergies: response[2].allergies,
        diagnosis: response[2].diagnosis,
        drug: response[3].drug,
        administration: response[3].administration,
        ambulance: response[3].ambulance,
        additionalInfo: response[3].additionalInfo,
      })
    })
    .catch(err => console.log(err))
  }

  // handleChange = (event) => {
  //   const {name, value} = event.target;
  //   this.setState({ [name]: value});
  // }

  // updateProfile = () => {
  //   this.service.updateProfile(this.state.name, this.state.email, this.state.dateOfBirth,
  //     this.state.address, this.state.city, this.state.contactname, this.state.relationshipcontact,
  //     this.state.contactname, this.state.relationshipcontact, this.state.contactphone, 
  //     this.state.bloodGroup, this.state.allergies, this.state.diagnosis, this.state.drug,
  //     this.state.administration, this.state.ambulance, this.state.additionalInfo) 
  // }

   render() {
    return this.state ? ( 
      <div>
        <h3>{this.state.username}'s profile info</h3>
        <p>This is the info that your NFC card will show.</p><Link to='/edit'>Anything to update? (Click here!)</Link>
        <h4>
          Your personal info:
        </h4>
        <ol>
          <li>Full name: {this.state.name}</li>
          <li>email: {this.state.email}</li>
          <li>Year of birth: {this.state.dateOfBirth}</li>
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

        <Link to={"/publicprofile/" + this.state._id}>See how others will see your profile</Link>
        <br></br>

      </div>
    ) : 'Loading...'
  }
}
  
export default Profile;

