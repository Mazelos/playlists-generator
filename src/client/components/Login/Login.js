import React, { Component } from 'react'
import './Login.scss';

export class LoginButton extends Component {
  render() {
    return (
      <div className="login-button">
        <a href="http://localhost:8888/login">Login with Spotify</a>
      </div>
    )
  }
}