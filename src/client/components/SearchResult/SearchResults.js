import React, { Component } from 'react';
import { TrackList } from '../TrackList/TrackList';
import { Playlist } from '../Playlist/Playlist';
import './SearchResults.scss';


export class SearchResults extends Component {
  render() { 
    return (
      <div className={`results ${this.props.isSubmitted === true ? 'not-hidden' : ''}`}>
        <TrackList results={this.props.tracks} isRemoval={false} addTrack={this.props.onAdd} didFound={this.props.didFound}/>
        <Playlist songsAdded={this.props.playlistTracks} isRemoval={true} removeTrack={this.props.onRemove} savePlaylist={this.props.onSavePlaylist}/>
      </div>
    )
  }
}