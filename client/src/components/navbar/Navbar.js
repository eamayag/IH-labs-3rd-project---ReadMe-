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
      <div className='navbardiv'>
        <nav className="nav-style">
          <ul>
            <li><a onClick={this.handleLogout}>Log out</a></li>
          </ul>

          <h2>Hi, {this.state.loggedInUser.username}!</h2>
        </nav>
      </div>
      )
    } else {
      return (
        <div className='navbardiv'>
          <div className='inlineblock'>
          <a className='forNavBar' href="https://github.com/eamayag"><em>sprnz</em></a>
          </div>
          <div className='inlineblock'>
            <nav className="nav-style">
            <ul>  
            <li><Link to='/signup'>Sign up</Link></li>
            <li><Link to='/login'>Log in</Link></li>
            </ul>
            </nav>
          </div>
        </div>
      )
    }
  }
}

export default Navbar;
