import React, { Component } from 'react';
import styled from 'styled-components';
import { BounceLoader } from 'react-spinners';
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

const Loader = styled.div`
  margin-top: 60px;
`;

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageOfItems: []
    };

  }

  onChangePage = pageOfItems => {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <Wrapper>
          {this.props.isFetching && (
            <Loader>
              <BounceLoader color={'#d34e00'} size={150} loading={this.state.loading} />
            </Loader>
          )}
          {!this.props.isFetching && this.state.pageOfItems.map(item => <BookDetail key={uuid()} book={item} />)}
          {!this.props.isFetching && <Pagination items={this.props.books} onChangePage={this.onChangePage} />}
        </Wrapper>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksList;
