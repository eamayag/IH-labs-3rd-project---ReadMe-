import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import ProfileService from "./ProfileService";
require('dotenv').config()

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
     redirect: false,
      user: {},
      contact: {},
      condition: {},
      treatment: {}
    };

    this.connection = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/profile`,
      withCredentials: true
    })

    this.profileService = new ProfileService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();    
    this.profileService.updateProfile(this.state)
    .then(user => {/* console.log(user); */ this.setState({redirect: true})})
  }

  handleChange = (event, type) => {  
    let {name, value} = event.target
    //console.log(type, event.target.name, event.target.value);
    let copy = {...this.state};
  
    copy[type][name] = value

    this.setState({[type] : copy[type]})
  }

  render() {
    let { name, email, dateOfBirth, address, city, contactname, 
      relationshipcontact, contactphone, bloodGroup, allergies,
      diagnosis, drug, administration, ambulance, additionalInfo } = this.state;
    if (this.state.redirect) return <Redirect to='/profile' />
    return (
      <div className='edittitle'>
        <h4>
          Edit your <em>ReadMe!</em> profile:
        </h4>
        <p>This is the info we will show on your NFC card. Just fill what you want to show, leave blank the rest.</p>
        <form onSubmit={this.handleFormSubmit}>
          <div className='editform'>
            <h4>Your personal info:</h4>
            <label>Name:</label>
            <input type='text' name='name' value={this.state.name} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>    
            <label>email:</label>
            <input type='email' name='email' value={this.state.email} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>
            <label>Year of birth:</label>
            <input type='number' name='dateOfBirth' value={this.state.dateOfBirth} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>
            <label>Address:</label>
            <input type='text' name='address' value={this.state.address} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>
            <label>City:</label>
            <input type='text' name='city' value={this.state.city} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>
          </div>
          <div className='editform'>
            <h4>Your emergency contact:</h4>
            <label>Name of your emergency contact:</label>
            <input type='text' name='contactname' value={this.state.contactname} onChange={ e => this.handleChange(e, 'contact')}/>
            <br></br>    
            <label>Relationship with your emergency contact:</label>
            <input type='text' name='relationshipcontact' placeholder='(cousin? mother? brother?)' value={this.state.relationshipcontact} onChange={ e => this.handleChange(e, 'contact')}/>
            <br></br>    
            <label>Phone of your emergency contact:</label>
            <input type='text' name='contactphone' value={this.state.contactphone} onChange={ e => this.handleChange(e, 'contact')}/>
            <br></br>
          </div>
          <div className='editform'>
            <h4>Your medical emergency info:</h4>
            <label>Blood group:</label>
            <input type='text' name='bloodGroup' placeholder='0+, 0-, A+, A-, B+, B-, AB+, AB-' value={this.state.bloodGroup} onChange={ e => this.handleChange(e, 'condition')}/>
            <br></br>    
            <label>Allergies:</label>
            <input type='text' name='allergies' value={this.state.allergies} onChange={ e => this.handleChange(e, 'condition')}/>
            <br></br>    
            <label>Any important disease you want to inform about in your NFC card?</label>
            <input type='text' name='diagnosis' placeholder='I have...' value={this.state.diagnosis} onChange={ e => this.handleChange(e, 'condition')}/>
            <br></br>
          </div>
          <div className='editform'>
            <h4>Your treatment in an emergency situation:</h4>
            <label>Medication you need to be administered inmediately:</label>
            <input type='text' name='drug' value={this.state.drug} onChange={ e => this.handleChange(e, 'treatment')}/>
            <br></br>    
            <label>How should anyone give this medication to you?</label>
            <input type='text' name='administration' placeholder='example: "pill under my tongue"' value={this.state.administration} onChange={ e => this.handleChange(e, 'treatment')}/>
            <br></br>    
            <label>Will you need an ambulance, or going to a hospital, in addition to your medication?</label>
            <input type='text' name='ambulance' placeholder='"Yes/No"' value={this.state.ambulance} onChange={ e => this.handleChange(e, 'treatment')}/>
            <br></br>
            <label>Any additional info you think anyone could need to help you:</label>
            <input type='text' name='additionalInfo' placeholder='example: "I need to be sitted"' value={this.state.additionalInfo} onChange={ e => this.handleChange(e, 'treatment')}/>
            <br></br>
          </div>
          <div className='inputedit'>
          <input type='submit' value='Submit'/>
          <p className='instructions'><Link to='/profile'>Back</Link></p>
          </div>
        </form>
      </div>
    );
  }

}

export default Edit;
