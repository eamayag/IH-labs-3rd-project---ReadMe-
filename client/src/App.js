import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Profile from './components/content/Profile';
import Public from './components/content/PublicProfile';
import Edit from './components/content/EditProfile';
require('dotenv').config()

class App extends Component {
  constructor(props){
    super(props)
   // console.log(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    return this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
    
  }
  
  render() {
    this.fetchUser()   
    const thisuser = this.state.loggedInUser;
    const title = <h1 className='title'>Welcome to ReadMe!</h1>;
    const info = <h2 className='info'>...what if a tag could save your life?</h2>;
    // const description = <h5>Sign up to have a NFC tag with all your emergency information. Let others know what you need when you can't say it!</h5>;
    // const examples = <p><em>Patients, children, elderly... if you might need help anytime from unknown people, let ReadMe help you!</em></p>
 
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <div className='body'>  
            <Switch>
              <Route exact path="/profile" render={() => <Profile user={this.state.loggedInUser} />} />
              <Route exact path="/edit" render={() => <Edit user={this.state.loggedInUser} />} />
              <Route exact path={"/publicprofile/:id"} render={(id) => <Public id={id} user={this.state.loggedInUser}/>} />
            </Switch>
          </div>
        </div>
      );

    } else {


      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <div className='body'>
         
          <div>{info}</div>
          <br></br>
          <div>{title}</div>
          
            <Switch>
              <Route exact path={"/publicprofile/:id"} render={(id) => <Public id={id} />} />
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
          </div>
        </div>
      );
    }
  }
}

export default App;
