import React, { Component } from 'react';
import './App.scss';

// importing components :
import { NavBar } from './NavBar/NavBar';
import { SearchBar } from './SearchBar/SearchBar';
import { SearchResults } from './SearchResult/SearchResults';

//importing helper functions :
import { cookieParser } from '../util/cookieParser';
import { getUserInfo } from '../util/getUserInfo';

// defining the app component that will render all other components imported 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionActivated: false,
      searchResults: [],
      playlistTracks: [],
      playlistName: '',
      didFound: false,
      userIsLogged: false,
      userInfo: {},
      accessToken: ''
    }
    this.activateTransition = this.activateTransition.bind(this);
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this); 
  }
  
  componentDidMount() {
    this.checkAuth();
    this.setState({
      transitionActivated: false
    })
  }

  activateTransition() {
    this.setState({
      transitionActivated: true
    })
  }

  checkAuth() {
    if (document.cookie === '') {
      console.log(`2-- no cookie found!`);
      this.setState({ userIsLogged: false });
      return;
    }
    const parsedCookies = cookieParser(document.cookie);
    if (parsedCookies['access_token']) {
      console.log('2-- user is logged with access_token: ', parsedCookies['access_token']);
      this.setState({
        accessToken: parsedCookies['access_token'],
        userIsLogged: true
      }, () => {
        this.getUserInfo(parsedCookies['access_token'])
      })    
    } else {
      console.log('2-- user is NOT logged');
      this.setState({
        userIsLogged: false
      })
    }
  }

  async getUserInfo(access_token) {
    const userInfo = await getUserInfo(access_token);
    this.setState({ userInfo: userInfo })
  }

  search(term) {
    for (let key in this.state.cookies) {
      console.log(`${key} : \n${this.state.cookies[key]}`)
    }
    fetch(`http://localhost:8888/search?name=${term}`)
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
          <NavBar userIsLogged={this.state.userIsLogged} userInfo={this.state.userIsLogged ? this.state.userInfo : {}}/>
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
