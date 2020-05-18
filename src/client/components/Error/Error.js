import React, { Component } from 'react';
import './Error.scss';

export class Error extends Component {
  render() {
    return (
      <div className='error-info'>
        <h3>Song not Found</h3>
        <p>The song you are looking for does not result to exist in our database.</p>
      </div>
    )
  }
}