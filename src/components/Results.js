import React, { Component } from 'react';
import api from '../utils/api';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    api.getBooks('język polski').then(resp => {
      this.setState(function() {
        return {
          books: resp.data
        };
      });
    });
  }

  render() {
    return <ul>{this.state.books.map(book => <li>{book.author}</li>)}</ul>;
  }
}

export default Results;
