import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../utils/api';
import BooksList from '../components/BooksList';

const Wrapper = styled.section`
  text-align: center;
  font-family: Open Sans, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, Helvetica Neue;
  background-color: #d34e00;
  color: white;
  width: 60%;
  margin: 0 20% 1% 20%;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Input = styled.input`
  margin-bottom: 15px;
  border: none;
  width: 200px;
  height: 30px;
`;
class BooksListContainer extends Component {
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
    const value = this.state.value;
    return (
      <div>
        <Wrapper>
          <Title>bookSearch</Title>
          <h3>Gdańskie Wydawnictwo Oświatowe API</h3>
          <form onChange={this.onValueChange}>
            <Input type="text" placeholder="search for books" value={this.state.value} minLength="3" maxLength="12" />
          </form>
        </Wrapper>

        {books && <BooksList value={value} books={books} />}
      </div>
    );
  }
}

export default BooksListContainer;
