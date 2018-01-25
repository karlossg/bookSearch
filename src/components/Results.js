import React, { Component } from 'react';
import uuid from 'uuid';
import api from '../utils/api';
import BookDetail from './BookDetail';

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
    return <div className="results">{this.state.books.map(book => <BookDetail key={uuid()} book={book} />)}</div>;
  }
}

export default Results;
