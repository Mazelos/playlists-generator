import React, { Component } from 'react';
import './NavBar.scss';
import { LoginButton } from '../Login/Login';
import { UserInfo } from '../UserInfo/UserInfo';

export class NavBar extends Component{
  render() {
    return (
      <div className='navbar'>
        <h1 className='nav-title'>Jamming</h1>
        { this.props.userIsLogged ?
          <UserInfo userInfo={this.props.userInfo} logOutUser={this.props.logOutUser}/>
          : <LoginButton /> }
      </div>
    )
  }
}