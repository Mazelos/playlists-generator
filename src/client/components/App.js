import React, { Component } from 'react';
import './App.scss';
// importing components :
import { NavBar } from './NavBar/NavBar';
import { SearchBar } from './SearchBar/SearchBar';
import { SearchResults } from './SearchResult/SearchResults';

// defining the app component that will render all other components imported 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionActivated: false,
      searchResults: [],
      playlistTracks: [],
      playlistName: '',
      didFound: false
    }
    this.activateTransition = this.activateTransition.bind(this);
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this); 
  }
  componentDidMount() {
    this.setState({
      transitionActivated: false
    })
  }

  activateTransition() {
    this.setState({
      transitionActivated: true
    })
  }

  search(term) {
    fetch(`http://localhost:3000/search?name=${term}`)
      .then(response => {
        return response.json()
      }).then(jsonRes => {
        this.setState({
          searchResults: jsonRes.result,
          didFound: true
        })
      }).catch(error => {
        this.setState({
          didFound: false
        })
      })
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      this.state.playlistTracks.push(track);
      this.setState({
        playlistTracks: this.state.playlistTracks
      })
    }
    const trackIndex = this.state.searchResults.findIndex(currentTrack => currentTrack.id === track.id);
    this.toggleHasBeenAdded(this.state.searchResults[trackIndex]);
  }
  removeTrack(track) {
    this.state.playlistTracks.forEach((currentTrack, index) => {
      if (currentTrack.id === track.id) {
        this.state.playlistTracks.splice(index, 1);
        this.setState({
          playlistTracks: this.state.playlistTracks
        })
      }
    });
    const trackIndex = this.state.searchResults.findIndex(currentTrack => currentTrack.id === track.id);
    this.toggleHasBeenAdded(this.state.searchResults[trackIndex]);
  }

  toggleHasBeenAdded(track) {
    track.hasBeenAdded = !track.hasBeenAdded;
  }

  render() {
    return (
     <div className='container'>
        <header>
          <NavBar />
        </header>
        <main>
          <SearchBar isSubmitted={this.state.transitionActivated} activateTransition={this.activateTransition}
            onSearch={this.search} 
          />
          <SearchResults isSubmitted={this.state.transitionActivated} didFound={this.state.didFound}
            tracks={this.state.searchResults} playlistTracks={this.state.playlistTracks} 
            onAdd={this.addTrack} onRemove={this.removeTrack}
          />
        </main>
     </div>
    )
  }
}

export default App;
