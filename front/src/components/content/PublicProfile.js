import React, { Component } from "react";
import PublicService from "./PublicService";

class Public extends Component {
  constructor(props, {match}) {
    super(props);
    this.state = {match: props.match.params.id}
    this.service = new PublicService();
  }
 
  componentDidMount() {

    this.service.getPublicProfile(this.state.match)
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
    console.log(this.state)
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
