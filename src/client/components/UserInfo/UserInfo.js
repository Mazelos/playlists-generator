import React, { Component } from 'react'
import './UserInfo.scss';

export class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {}
    }
    this.logInfo = this.logInfo.bind(this);
  }

  logInfo() { 
    console.log('user info : \n', this.props.userInfo)
  }

  render() {
    return (
      <div className='info-button'>
        <a onClick={this.logInfo}>{this.props.userInfo.id}</a>
      </div>
    )
  }
}