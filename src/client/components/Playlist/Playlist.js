import React, { Component } from 'react';
import { Track } from '../Track/Track';
import './Playlist.scss';

export class Playlist extends Component {
  render() {
    return (
      <div className='playlist'>
        <h2>Playlist</h2>
        {this.props.songsAdded.map(track => {
          return <Track
            key={track.id} track={track}
            isRemoval={this.props.isRemoval} removeTrack={this.props.removeTrack}
          />
        })}
      </div>
    )
  }
}