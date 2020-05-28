import React, { Component } from 'react';
import './TrackList.scss';
import { Track } from '../Track/Track';
import { Error } from '../Error/Error';

export class TrackList extends Component {
  render() {
    return (
      this.props.didFound === true ?
        <div className='search-result'>
          <div className='title'>
            <h2>Results</h2>
          </div>
          <div className='tracks'>
            {this.props.results.map(track => {
              return <Track
                key={track.id} track={track}
                isRemoval={this.props.isRemoval} addTrack={this.props.addTrack}/>
            })}
          </div>
        </div> :
        <div className='error'>
          <h2>
            ops!
            <span role='img' aria-labelledby="face-palm">🤦‍♂️</span>
          </h2>
          <Error/>
        </div> 
    )
  }
}