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
    if (event.charCode === 8) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(event.type);
    this.setState({ value: event.target.value });
    this.getBooks(event.target.value);
    // console.log(this.state.value);
  }

  handleKeyDown(event) {
    if (event.charCode === 8) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  getBooks(value) {
    if (value.length > 4) {
      api.getBooks(value).then(resp => {
        this.setState({ books: resp });
      });
    }
  }

  render() {
    let books = this.state.books;

    return (
      <div className="landing">
        <h1>bookSearch</h1>
        <h5>Gdańskie Wydawnictwo Oświatowe API</h5>
        <form>
          <input
            type="text"
            placeholder="search for books"
            value={this.state.value}
            onChange={this.onValueChange}
            onKeyDown={this.handleKeyDown}
          />
        </form>
        {books && <Results books={books} />}
      </div>
    );
  }
}

// Landing.propTypes = {};

export default Landing;
