import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      name: '',
      role: '',
      email: ''
    };
  }

  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmailInput = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render() {
   console.log(this.state);
    return (
      <div>
        <h1>
          Edit your <em>ReadMe!</em> profile
        </h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type='text' name='name' placeholder='name' value={this.state.username}/>
          <br></br>
          
          <label>email:</label>
          <input type='text' name='email' placeholder='email' value={this.state.username}/>
          <br></br>

          <label>Are you a caregiver?</label>
          <input type="checkbox" name="role" checked={this.state.role}/>
          <br></br>

          <input type='submit' value='Submit'/>
        </form>

      </div>
    );
  }
}

export default Edit;
