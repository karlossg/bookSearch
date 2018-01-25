import React, { Component } from 'react';

class BookDetail extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <img alt={`${this.props.book.cover} Show Poster`} src={`${this.props.book.cover}`} />

        <h3>{this.props.book.title}</h3>
        <h4>({this.props.book.author})</h4>
        <p>{this.props.book.isbn}</p>
      </div>
    );
  }
}

export default BookDetail;
