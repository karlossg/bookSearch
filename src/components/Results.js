import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import api from '../utils/api';
import BookDetail from './BookDetail';
import Pagination from './Pagination';

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
      books: [],
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  componentWillMount() {
    api.getBooks('język').then(resp => {
      console.log(resp.data);
      this.setState(function() {
        return {
          books: resp.data
        };
      });
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          {this.state.books.map(item => <BookDetail key={uuid()} book={item} />)}
          <Pagination items={this.state.books} onChangePage={this.onChangePage} />
        </Wrapper>
      </div>
    );
  }
}

export default Results;
