import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getData() {
    fetch('https://gwo.pl/booksApi/v1/search?query=historia')
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(data => console.log(data))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
