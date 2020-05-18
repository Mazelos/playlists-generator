import React, { Component } from 'react';
import './Track.scss';

export class Track extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    !this.props.track.hasBeenAdded === true && this.props.addTrack(this.props.track);
  }
  handleRemove() {
    this.props.removeTrack(this.props.track);
  }

  render() {
    return (
      <div className='song'>
        <div className='track-info'>
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}</p>
          <span>|</span>
          <p>{this.props.track.album}</p>
        </div>
        {
          this.props.isRemoval ?
            <div className='action-button' onClick={this.handleRemove}>
              <span>-</span>
            </div> :
            <div className='action-button' onClick={this.handleAdd}>
              <span className={this.props.track.hasBeenAdded === true ? 'added' : 'not-added'}>+</span>
            </div>
        }
      </div>
    )
  }
}