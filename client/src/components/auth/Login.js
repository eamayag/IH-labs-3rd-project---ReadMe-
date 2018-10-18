import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from './AuthService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', redirect: false };
    this.service = new AuthService();
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          redirect: true,
          error: false
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if(this.state.redirect) return <Redirect to='/profile' />

    return (
    <div className='loginDiv'>
      <h3>Log in:</h3>

      <form className='logininput' onSubmit={this.handleFormSubmit}>
        <fieldset className='logininput'>
          <label>Username:</label>
          <input className='logininput' type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset className='logininput'>
          <label>Password:</label>
          <input className='logininput' type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>


        <input className='logininput' type="submit" value="Log in"/>
      </form>

      <p>{this.state.error ? 'Invalid username or password' : ''}</p>
    </div>)
  }
}

export default Login;