import React, { Component } from 'react';
import './SearchBar.scss';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchTerm: ''
    }
  }

  toggleButton() {
    this.props.activateTransition();
    this.props.onSearch(this.state.searchTerm);
    this.setState({
      searchTerm: ''
    });
  }
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.activateTransition();
      this.props.onSearch(this.state.searchTerm);
      this.setState({
        searchTerm: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className={`search-bar ${this.props.isSubmitted === true ? 'submitted' : ''}`}>
        <input className='text' placeholder='Search a song' type='text' value={this.state.searchTerm}
          onKeyDown={this.handleKeyDown} onChange={this.handleChange}/> 
        <button className='submit' onClick={this.toggleButton}>SEARCH</button>
      </div>
    )
  }
}
