import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import BookDetail from './BookDetail';
import Pagination from './Pagination';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <Wrapper>
          {this.state.pageOfItems.map(item => <BookDetail key={uuid()} book={item} />)}
          <Pagination items={this.props.books} onChangePage={this.onChangePage} />
        </Wrapper>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksList;
