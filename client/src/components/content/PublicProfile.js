import React, { Component } from "react";
import PublicService from "./PublicService";
import { Link } from 'react-router-dom';

class Public extends Component {
  constructor(props, {id}) {
    super(props);
    this.service = new PublicService();
    props.user ?  this.state = {match: props.id.match.params.id, loggedInUser: props.user} : this.state = {match: props.id.match.params.id}
   
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
    //user logged
    let backButton='';
    if (this.state.loggedInUser) {backButton = <p className='instructions'><Link to='/profile'>Back</Link></p>}
    //Personal info - pack
    let userSection;
    if ((this.state.email) || (this.state.dateOfBirth) || (this.state.address) || (this.state.city)) {
      userSection = <h4>Personal info:</h4>}
    let showEmail;
    if (this.state.email) {showEmail = <p>email: {this.state.email}</p>}
    let showYearBirth;
    if (this.state.dateOfBirth) {showYearBirth = <p>Year of birth: {this.state.dateOfBirth}</p>}
    let showAddress;
    if (this.state.address) {showAddress = <p>Address: {this.state.address}</p>}
    let showCity;
    if (this.state.city) {showCity = <p>City: {this.state.city}</p>}
    //Emergency contact - pack
    let contactSection;
    if ((this.state.contactname) || (this.state.relationshipcontact) || (this.state.contactphone) ){
      contactSection = <h4>EMERGENCY CONTACT:</h4>}
    let showContactName;
    if (this.state.contactname) {showContactName = <p>Name: {this.state.contactname}</p>}
    let showRelationshipContact;
    if (this.state.relationshipcontact) {showRelationshipContact = <p>is his/her...: {this.state.relationshipcontact}</p>}
    let showContactPhone;
    if (this.state.contactphone) {showContactPhone = <p>Phone: {this.state.contactphone}</p>}
    //Emergency info - pack
    let emergencySection;
    if ((this.state.bloodGroup) || (this.state.diagnosis) || (this.state.drug) || (this.state.administration) || (this.state.ambulance) || (this.state.additionalInfo)) {
      emergencySection = <h4>EMERGENCY INFO:</h4>}
    let showBloodGroup;
    if (this.state.bloodGroup) {showBloodGroup = <p>Blood group: {this.state.bloodGroup}</p>}
    let showAllergies;
    if (this.state.allergies) {showAllergies =  <p>Allergies: {this.state.allergies}</p>}
    let showDisease;
    if (this.state.diagnosis) {showDisease =  <p>Disease: {this.state.diagnosis}</p>}
    let showDrugs;
    if (this.state.drug) {showDrugs =  <p>{this.state.username} needs this medication: {this.state.drug}</p>}
    let showAdministration;
    if (this.state.administration) {showAdministration =  <p>It must be administered in this way: {this.state.administration}</p>}
    let showAmbulance;
    if (this.state.ambulance) {showAmbulance =  <p>{this.state.username} needs you to call an ambulance: {this.state.ambulance}</p>}
    let showAdditionalInfo;
    if (this.state.additionalInfo) {showAdditionalInfo =  <p>Additional info: {this.state.additionalInfo}</p>}

    if (this.state){
    return (
    <div>
        <h1 className='publictitle'>This is the public <em>ReadMe!</em> profile of {this.state.name}</h1>
        <h2 className='publictitle'>If you're reading this, {this.state.name} probably needs your help!</h2>
      <div className='publictitle'>{userSection}</div>
      <div>
        {showEmail}
        {showYearBirth}
        {showAddress}
        {showCity}
      </div>
      <div className='publictitle'>{contactSection}</div>
      <div>
        {showContactName}
        {showRelationshipContact}
        {showContactPhone}
      </div>  
      <div className='publictitle'>{emergencySection}</div>
      <div>
        {showBloodGroup}
        {showAllergies}
        {showDisease}
        {showDrugs}
        {showAdministration}
        {showAmbulance}
        {showAdditionalInfo}
      </div>
      <div className='publictitle'>
        {backButton}
      </div>
    </div>
    );
    } else {
      return <h3>Loading...</h3>
    }
  }
}

export default Public;
