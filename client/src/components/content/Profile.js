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
        <p className='instructions'>This is the info that your NFC card will show.</p><Link to='/edit'>Anything to update? (Click here!)</Link>
        <h4>
          Your personal info:
        </h4>       
          <p>Full name: {this.state.name}</p>
          <p>email: {this.state.email}</p>
          <p>Year of birth: {this.state.dateOfBirth}</p>
          <p>Address: {this.state.address}</p>
          <p>City: {this.state.city}</p>
        <h4>
          Your emergency contact:
        </h4>
          <p>Name: {this.state.contactname}</p>
          <p>is your... {this.state.relationshipcontact}</p>
          <p>Phone: {this.state.contactphone} </p>
        <h4>
          Your medical info:
        </h4>
          <p>Blood group: {this.state.bloodGroup}</p>
          <p>Allergies: {this.state.allergies}</p>
          <p>Disease: {this.state.diagnosis} </p>
        <h4>
          Your treatment info:
        </h4>
          <p>I need this medication: {this.state.drug}</p>
          <p>It must be administered in this way: {this.state.administration}</p>
          <p>I need an ambulance: {this.state.ambulance} </p>
          <p>Additional info: {this.state.additionalInfo} </p>

        <Link to={"/publicprofile/" + this.state._id}>See how others will see your profile</Link>
        <br></br>

      </div>
    ) : 'Loading...'
  }
}
  
export default Profile;

