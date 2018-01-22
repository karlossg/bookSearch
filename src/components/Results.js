import React from 'react';
import api from '../utils/api';

const Results = () => {
  api
    .getBooks('polski')
    .then(resp => {
      // resp.data.map(item => books.push(data));

      return resp.data;
    })
    .then(function(resp) {
      console.log(resp);
    });

  // <ul>{resp.data.map(item => <li>{item}</li>)}</ul>);
  // getData() {
  //   fetch('https://gwo.pl/booksApi/v1/search?query=historia')
  //     .then(response => response.json())
  //     .catch(error => console.error('Error:', error))
  //     .then(data => console.log(data))
  // }
  // componentDidMount() {
  //   this.getData();
  // }
};

export default Results;
