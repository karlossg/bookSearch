import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import api from '../utils/api';
import BookDetail from './BookDetail';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  flex-wrap: wrap;
`;

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
    return <Wrapper>{this.state.books.map(book => <BookDetail key={uuid()} book={book} />)}</Wrapper>;
  }
}

export default Results;
