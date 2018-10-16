import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ProfileService from "./ProfileService";

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
      baseURL: 'http://localhost:3001/profile',
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
      <div>
        <h1>
          Edit your <em>ReadMe!</em> profile:
        </h1>
        <p>Remember this is the info we will show on your NFC card. Just fill what you want to show, leave blank the rest.</p>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <h4>Your personal info:</h4>
            <label>Name:</label>
            <input type='text' name='name' placeholder='Your full name' value={this.state.name} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>    
            <label>email:</label>
            <input type='email' name='email' placeholder='Your email' value={this.state.email} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>
            <label>Date of birth:</label>
            <input type='date' name='dateOfBirth' value={this.state.dateOfBirth} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>
            <label>Address:</label>
            <input type='text' name='address' value={this.state.address} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>
            <label>City:</label>
            <input type='text' name='city' value={this.state.city} onChange={ e => this.handleChange(e, 'user')}/>
            <br></br>
          </div>
          <div>
            <h4>Your emergency contact:</h4>
            <label>Name of your emergency contact:</label>
            <input type='text' name='contactname' placeholder='Name of your emergency contact' value={this.state.contactname} onChange={ e => this.handleChange(e, 'contact')}/>
            <br></br>    
            <label>Relationship with your emergency contact:</label>
            <input type='text' name='relationshipcontact' placeholder='is my...(cousin? mother? brother?)' value={this.state.relationshipcontact} onChange={ e => this.handleChange(e, 'contact')}/>
            <br></br>    
            <label>Phone of your emergency contact:</label>
            <input type='tel' name='phone' value={this.state.contactphone} onChange={ e => this.handleChange(e, 'contact')}/>
            <br></br>
          </div>
          <div>
            <h4>Your medical emergency info:</h4>
            <label>Blood group:</label>
            <input type='text' name='bloodGroup' placeholder='0+, 0-, A+, A-, B+, B-, AB+, AB-' value={this.state.bloodGroup} onChange={ e => this.handleChange(e, 'condition')}/>
            <br></br>    
            <label>Allergies:</label>
            <input type='text' name='allergies' placeholder='allergies' value={this.state.allergies} onChange={ e => this.handleChange(e, 'condition')}/>
            <br></br>    
            <label>Any important disease you want to inform about in your NFC card?</label>
            <input type='text' name='diagnosis' placeholder='I have...' value={this.state.diagnosis} onChange={ e => this.handleChange(e, 'condition')}/>
            <br></br>
          </div>
          <div>
            <h4>Your treatment in an emergency situation:</h4>
            <label>Medication you need to be administered inmediately:</label>
            <input type='text' name='drug' placeholder='name of medication' value={this.state.drug} onChange={ e => this.handleChange(e, 'treatment')}/>
            <br></br>    
            <label>How should anyone give this medication to you?</label>
            <input type='text' name='administration' placeholder='example: "I must put two pills under my tongue"...' value={this.state.administration} onChange={ e => this.handleChange(e, 'treatment')}/>
            <br></br>    
            <label>Will you need an ambulance, or going to a hospital, in addition to your medication?</label>
            <input type='text' name='ambulance' placeholder='"Yes, call an ambulance/No, I will be ok with my medication"' value={this.state.ambulance} onChange={ e => this.handleChange(e, 'treatment')}/>
            <br></br>
            <label>Any additional info you think anyone could need to help you:</label>
            <input type='text' name='additionalInfo' placeholder='example: "I am deaf/I need to be sitted/I am afraid of dogs"' value={this.state.additionalInfo} onChange={ e => this.handleChange(e, 'treatment')}/>
            <br></br>
          </div>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }

}

export default Edit;
