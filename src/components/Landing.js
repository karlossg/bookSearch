import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../utils/api';
import BooksList from './BooksList';

const Wrapper = styled.section`
  text-align: center;
  font-family: 'Opens Sans';
`;

const Input = styled.input`
  margin-bottom: 15px;
`;
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
    event.preventDefault();
    let value = event.target.value;
    this.setState((state, event) => {
      return { value };
    });
    setTimeout(() => {
      this.getBooks(value);
    }, 1500);
  }

  getBooks(value) {
    if (value.length > 4) {
      api.getBooks(value).then(resp => {
        this.setState({ books: resp });
      });
    }
  }

  render() {
    const books = this.state.books;

    return (
      <Wrapper>
        <h1>bookSearch</h1>
        <h5>Gdańskie Wydawnictwo Oświatowe API</h5>

        <Input type="text" placeholder="search for books" value={this.state.value} onChange={this.onValueChange} />

        {books && <BooksList books={books} />}
      </Wrapper>
    );
  }
}

export default Landing;
