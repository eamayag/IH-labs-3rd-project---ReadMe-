import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from '../auth/AuthService';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, redirect: false };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout().then(() =>  this.setState({redirect: true}))
  }

  render() {
    if(this.state.redirect) return (<Redirect to='/login' />)

    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li><a onClick={this.handleLogout}>Logout</a></li>
          </ul>

          <h2>Welcome, {this.state.loggedInUser.username}</h2>
        </nav>
      )
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
}

export default Navbar;