import React, { Component } from 'react';
// import styled from 'styled-components';
// import uuid from 'uuid';
import api from '../utils/api';
import BooksList from './BooksList';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    api.getBooks('historia').then(resp => {
      this.setState(() => {
        return {
          books: resp
        };
      });
    });
  }

  render() {
    return (
      <div>
        <BooksList books={this.state.books} />
      </div>
    );
  }
}

export default Results;
