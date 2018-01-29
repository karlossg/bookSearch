import React, { Component } from 'react';
// import _ from 'lodash';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import api from '../utils/api';
import Results from './Results';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      books: []
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    // console.log(this.state.value);
    this.setState({ value: event.target.value });
    this.getBooks(event.target.value);
    // console.log(this.state.value);
  }

  getBooks(value) {
    api.getBooks(value).then(resp => {
      this.setState({ books: resp });
    });
  }

  render() {
    let books = this.state.books;

    return (
      <div className="landing">
        <h1>bookSearch</h1>
        <h5>Gdańskie Wydawnictwo Oświatowe API</h5>
        <form>
          <input type="text" placeholder="search for books" value={this.state.value} onChange={this.onValueChange} />
        </form>
        <Results books={books} />
      </div>
    );
  }
}

// Landing.propTypes = {};

export default Landing;
