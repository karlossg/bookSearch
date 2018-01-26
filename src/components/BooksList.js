import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
// import api from '../utils/api';
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
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
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

export default Results;
