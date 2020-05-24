import React, { Component } from 'react'

export class UserInfo extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      info: {}
    }
    this.logInfo = this.logInfo.bind(this);
  }

  componentDidMount() {
    this.logInfo();
  }

  logInfo() { 
    for (let item in this.props.UserInfo) {
      console.log(this.props.UserInfo[item])
    }
  }

  render() {
    return (
      <h1>Logged in</h1>
    )
  }
}