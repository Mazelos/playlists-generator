import React, { Component } from 'react';
import './SearchBar.scss';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchTerm: '',
      inputIsValid: false,
      invalidSubmit: false
    }
  }

  // this will update the state so 'invalid-submit' animation can be fired 
  toggleButton() {
    // this will update the state in case of empty submits so 'invalid-submit' animation can be fired.
    // once the animation finish (1s) the state will be resetted (so can be re-fired again).
    // quite shitty... I have to refactor it in a better way 
    if (!this.state.inputIsValid) {
      this.setState({ invalidSubmit: true }, () => {
        setTimeout(() => {
          this.setState({ invalidSubmit: false })
        },1000)
      });
      return
    }
    // activate the first time transition, this func will be called each time but takes effect just once 
    this.props.activateTransition();
    // passing the search term to the parent
    this.props.onSearch(this.state.searchTerm);
    // reset the state ...
    this.setState({
      searchTerm: '',
      inputIsValid: false,
      invalidSubmit: false
    });
  }

  // handle the inputs 
  handleChange(event) {
    // won't proceed if the user inputs white spaces
    if (event.target.value[0] !== ' ') {
      // validate the input (make it submittable) and update the search term in the state
      this.setState({
        searchTerm: event.target.value,
        inputIsValid: true
      });
    }
  }

  render() {
    return (
      // this is just to make the css transition at the begin -------------↓
      <div className={`search-bar ${this.props.isSubmitted === true ? 'submitted' : ''}`}>  
        <input className={`text ${this.state.invalidSubmit ? 'invalid-submit' : ''}`}  // toogle the animation in css for the invalid submit
          placeholder='Search a song' type='text' value={this.state.searchTerm}
          onChange={this.handleChange} />
        <button className='submit' onClick={this.toggleButton}>SEARCH</button>
      </div>
    )
  }
}
