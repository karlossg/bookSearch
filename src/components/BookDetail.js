import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 32%;
  height: 400px;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 40%;
  height: 300px;
  float: left;
  margin-right: 10px;
`;

class BookDetail extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log(this.props);
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
          <a href={this.props.book.url} target="_blank">
            Przejdź do księgarni
          </a>
        </div>
      </Wrapper>
    );
  }
}

export default BookDetail;
