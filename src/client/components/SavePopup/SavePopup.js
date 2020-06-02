import React, { Component } from 'react';
import './SavePopup.scss';

export class SavePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      nameIsValid: false
    }
    this.toggleButton = this.toggleButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // this can't let the user starts typing with white spaces 
    if (event.target.value[0] !== ' ') {
      this.setState({
        playlistName: event.target.value,
        nameIsValid: true
      });
    }
  }

  toggleButton() {
    if (this.state.nameIsValid === true) {
      this.props.savePlaylist(this.state.playlistName);
      this.setState({
        playlistName: '',
        nameIsValid: false
      })
    }
  }

  render() {
    return (
      <div className='popup'>
        <input className={`playlist-name`}
          placeholder='Playlist name' type='text' value={this.state.playlistName}
          onChange={this.handleChange} />
        <div className='save-button' onClick={this.toggleButton}><a>Save Playlist</a></div>
      </div>
    )
  }
}