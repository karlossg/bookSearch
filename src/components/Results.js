import React, { Component } from 'react';
// import styled from 'styled-components';
// import uuid from 'uuid';
// import api from '../utils/api';
import BooksList from './BooksList';

class Results extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <BooksList books={this.props.books} />
      </div>
    );
  }
}

export default Results;
