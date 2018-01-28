import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import api from '../utils/api';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      books: []
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    api.getBooks(this.state.value).then(resp => {
      console.log(resp)
      // this.setState(() => {
      //   return {
      //     books: resp
      //   };
      // });
    });
  }

  onValueChange(event) {
    event.preventDefault();
    console.log(event.value)
    // this.setState((event) => {
    //   return {
    //     value: event.target.value
    //   }
    // })
  }

  render() {
    return (
      <form onSubmit={() => this.handleSubmit}>
        <input
          type="text"
          placeholder="search for books"
          value={this.state.value}
          onChange={this.onValueChange.bind(this)} />
        <Link to={{
          pathname: '/result',
          state: { books: this.props.books }
        }} />
      </form>
    );
  }
}

// Landing.propTypes = {};

export default Landing;
