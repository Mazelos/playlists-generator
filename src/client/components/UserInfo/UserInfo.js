import React, { Component } from 'react'
import './UserInfo.scss';

export class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
      infoAreHidden: true
    }
    this.logInfo = this.logInfo.bind(this);
  }

  logInfo() { 
    this.setState({
      infoAreHidden: !this.state.infoAreHidden
    })
  }

  render() {
    return (
      <div>
        <div className='info-button' onClick={this.logInfo}>
          <a>{this.props.userInfo.id}</a>
        </div>
        <div className={`info-container ${this.state.infoAreHidden? 'hidden' : 'visible'}`} >
          <h3>{this.props.userInfo.display_name}</h3>
          <p><strong>Email</strong>: {this.props.userInfo.email}</p>
          <p><strong>Country</strong>: {this.props.userInfo.country}</p>
          <p><strong>Account status</strong>: {this.props.userInfo.product}</p>
          {/*this will prevent React to throw an error, (react renders twice...)*/}
          <a href={this.props.userInfo.external_urls ? this.props.userInfo.external_urls.spotify : ''} target='blank'>
            <strong>Spotify web player</strong>
          </a>
        </div>
      </div>
    )
  }
}