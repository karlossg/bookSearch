import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  width: 59.4%;
  margin-bottom: 5px;
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
  width: 200px;
  height: 35px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const Span = styled.span`
  font-weight: bold;
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
          <Title>{this.props.book.title}</Title>
          <h4>({this.props.book.author})</h4>
          <p>
            <Span>ISBN:</Span> {this.props.book.isbn}
          </p>
          <p>
            <Span>MEN:</Span> {this.props.book.men}
          </p>
          <p>
            <Span>liczba stron:</Span> {this.props.book.pages_count}
          </p>
          <p>
            <Span>poziom:</Span> {this.props.book.school} / {this.props.book.class}
          </p>
          <p>
            <Span>przedmiot:</Span> {this.props.book.subject}
          </p>
          <p>
            <Span>rodzaj:</Span> {this.props.book.type}
          </p>
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
