import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  width: 60%;
  margin-bottom: 25px;
  padding-right: 10px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.12), 0 1px 2px 1px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  float: left;
  margin-right: 10px;
  padding: 10px;
`;

const Button = styled.button`
  background-color: #d34e00;
  color: white;
  border: none;
  width: 250px;
  height: 35px;
  cursor: pointer;
`;

class BookDetail extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <Image alt={`${this.props.book.cover} Show Poster`} src={`${this.props.book.cover}`} />
        <div>
          <h3>{this.props.book.title}</h3>
          <h4>({this.props.book.author})</h4>
          <p>ISBN: {this.props.book.isbn}</p>
          <p>MEN: {this.props.book.men}</p>
          <p>liczba stron: {this.props.book.pages_count}</p>
          <p>
            poziom: {this.props.book.school} / {this.props.book.class}
          </p>
          <p>przedmiot: {this.props.book.subject}</p>
          <p>rodzaj: {this.props.book.type}</p>
          <Button onClick={() => window.open(`${this.props.book.url}`, '_blank')}>Przejdź do księgarni</Button>
        </div>
      </Wrapper>
    );
  }
}

BookDetail.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    men: PropTypes.string.isRequired,
    pages_count: PropTypes.number.isRequired,
    school: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default BookDetail;
