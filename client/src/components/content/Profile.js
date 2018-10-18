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

   render() {
    return this.state ? ( 
      <div>
        <div className='instructions'>
        <p>This is your NFC tag information.</p>
        <p><Link to='/edit'>Any update? (Click here!)</Link></p>
        </div>
        <h4 className='profileinfo'>Your personal info:</h4>       
          <p>Full name: {this.state.name}</p>
          <p>email: {this.state.email}</p>
          <p>Year of birth: {this.state.dateOfBirth}</p>
          <p>Address: {this.state.address}</p>
          <p>City: {this.state.city}</p>
        <h4 className='profileinfo'>Your emergency contact:</h4>
          <p>Name: {this.state.contactname}</p>
          <p>is your... {this.state.relationshipcontact}</p>
          <p>Phone: {this.state.contactphone} </p>
        <h4 className='profileinfo'>Your medical info:</h4>
          <p>Blood group: {this.state.bloodGroup}</p>
          <p>Allergies: {this.state.allergies}</p>
          <p>Disease: {this.state.diagnosis} </p>
        <h4 className='profileinfo'>Your treatment info:</h4>
          <p>I need this medication: {this.state.drug}</p>
          <p>It must be administered in this way: {this.state.administration}</p>
          <p>I need an ambulance: {this.state.ambulance} </p>
          <p>Additional info: {this.state.additionalInfo} </p>

        <p className='instructions'><Link to={"/publicprofile/" + this.state._id}>See how others will see your profile</Link></p>
        <br></br>

      </div>
    ) : 'Loading...'
  }
}
  
export default Profile;

