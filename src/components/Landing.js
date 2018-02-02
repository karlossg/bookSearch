import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import api from '../utils/api';
import store from '../store/store';
import BooksList from './BooksList';
import getBooksAction from '../actions/actionsCreators';

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

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
      // books: []
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
        this.props.dispatch(getBooksAction(resp));
      });
    }
  }

  render() {
    const books = this.props.books;
    const value = this.state.value;
    return (
      <div>
        <Wrapper>
          <Title>bookSearch</Title>
          <h3>Gdańskie Wydawnictwo Oświatowe API</h3>

          <Input type="text" placeholder="search for books" value={this.state.value} onChange={this.onValueChange} />
        </Wrapper>

        {books && <BooksList value={value} books={books} />}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    books: store.reducer.books
  };
};

export default connect(mapStateToProps)(Landing);
