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
    api
      .getBooks('polski')
      .then(resp => {
        // resp.data.map(item => books.push(data));

        return resp.data;
      })
      .then(
        function(resp) {
          this.setState(function() {
            return {
              books: resp
            };
          });
        }.bind(this)
      );
  }

  render() {
    return <ul>{this.state.books.map(book => <li>{book.author}</li>)}</ul>;
  }
}

export default Results;
