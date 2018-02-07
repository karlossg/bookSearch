import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

const List = styled.ul`
  cursor: pointer;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d34e00;
  color: white;
  font-size: 20px;
  width: 58.5%;
`;

const Link = styled.a`
  margin: 5px;
`;
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    // set page if items array isn't empty

    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    const items = this.props.items;
    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page);

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 3;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 10) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 5;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    const pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <List className="pagination">
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <Link onClick={() => this.setPage(1)}>First</Link>
        </li>
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <Link onClick={() => this.setPage(pager.currentPage - 1)}>Previous</Link>
        </li>
        {pager.pages.map((page, index) => (
          <li key={index} className={pager.currentPage === page ? 'active' : ''}>
            <Link onClick={() => this.setPage(page)}>{page}</Link>
          </li>
        ))}
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <Link onClick={() => this.setPage(pager.currentPage + 1)}>Next</Link>
        </li>
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <Link onClick={() => this.setPage(pager.totalPages)}>Last</Link>
        </li>
      </List>
    );
  }
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number
};

Pagination.defaultProps = {
  initialPage: 1
};

export default Pagination;
