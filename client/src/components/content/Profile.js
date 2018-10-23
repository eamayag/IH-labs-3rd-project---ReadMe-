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
      <div>
        <div className='instructions'>
        <p>This is your NFC tag information.</p>
        <p><Link to='/edit'>Any update? (Click here!)</Link></p>
        </div>

        <div className='allinfo'>
          <div className="card text-white bg-dark mb-3 mx-auto" style={{ width: '30rem'}}>
            <h4 className='card-header profileinfo'>Your personal info:
            </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-warning">Full name: {this.state.name}</li>
                <li className="list-group-item list-group-item-warning">email: {this.state.email}</li>
                <li className="list-group-item list-group-item-warning">Year of birth: {this.state.dateOfBirth}</li>
                <li className="list-group-item list-group-item-warning">Address: {this.state.address}</li>
                <li className="list-group-item list-group-item-warning">Address: {this.state.city}</li>
              </ul>
          </div>

          <div className="card text-white bg-dark mb-3 mx-auto" style={{ width: '30rem' }}>
            <h4 className='card-header profileinfo'>Your emergency contact:
            </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-warning">Name: {this.state.contactname}</li>
                <li className="list-group-item list-group-item-warning">is your... {this.state.relationshipcontact}</li>
                <li className="list-group-item list-group-item-warning">Phone: {this.state.contactphone}</li>
              </ul>
          </div>

          <div className="card text-white bg-dark mb-3 mx-auto" style={{ width: '30rem' }}>
            <h4 className='card-header profileinfo'>Your medical info:
            </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-warning">Blood group: {this.state.bloodGroup}</li>
                <li className="list-group-item list-group-item-warning">Allergies: {this.state.allergies}</li>
              </ul>
          </div>

          <div className="card text-white bg-dark mb-3 mx-auto" style={{ width: '30rem' }}>
            <h4 className='card-header profileinfo'>Your treatment info: 
            </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-warning">Disease: {this.state.diagnosis} </li>
                <li className="list-group-item list-group-item-warning">I need this medication: {this.state.drug}</li>
                <li className="list-group-item list-group-item-warning">It must be administered in this way: {this.state.administration}</li>
                <li className="list-group-item list-group-item-warning">I need an ambulance: {this.state.ambulance} </li>
                <li className="list-group-item list-group-item-warning">Additional info: {this.state.additionalInfo} </li>
              </ul>
            </div>
          </div>
            
            
        </div>

        <p className='instructions'><Link to={"/publicprofile/" + this.state._id}>See how others will see your profile</Link></p>
        <br></br>

      </div>
    ) : 'Loading...'
  }
}
  
export default Profile;

