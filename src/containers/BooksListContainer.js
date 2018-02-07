import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getBooksIfNeeded from '../actions/actionsCreators'
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
  onValueChange = event => {
    event.preventDefault();
    let value = event.target.value;
    this.props.dispatch(getBooksIfNeeded(value))
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title>bookSearch</Title>
          <h3>Gdańskie Wydawnictwo Oświatowe API</h3>
          <form onChange={this.onValueChange}>
            <Input type="text" placeholder="search for books" value={this.props.value} minLength="3" maxLength="12" />
          </form>
        </Wrapper>
        <BooksList isFetching={this.props.isFetching} books={this.props.books} />
      </div>
    );
  }
}

BooksListContainer.propTypes = {
  books: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = store => {
  const { books, searchValue, isFetching } = store.getBooks

  return {
    books,
    isFetching,
    searchValue
  }
}

export default connect(mapStateToProps)(BooksListContainer);

