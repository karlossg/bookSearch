import React, { Component } from 'react';
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    api.getBooks(this.state.value).then(resp => {
      this.setState({ books: resp });
    });
    event.preventDefault();

  }

  onValueChange(event) {
    this.setState({ value: event.target.value });
    api.getBooks(event.target.value).then(resp => {
      this.setState({ books: resp });
    });
    event.preventDefault();
  }

  render() {
    return (

      <div className="landing">
        <h1>bookSearch</h1>
        <h5>Gdańskie Wydawnictwo Oświatowe API</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search for books"
            value={this.state.value}
            onChange={this.onValueChange} />

        </form>
        {this.state.books &&
          <Results books={this.state.books} />}
      </div>
    );
  }
}

// Landing.propTypes = {};

export default Landing;
