import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>bookSearch</h1>
        <h5>Gdańskie Wydawnictwo Oświatowe API</h5>
        <form>
          <input type="text" placeholder="search" />
          <Link to="/search" />
        </form>
      </div>
    );
  }
}

// Landing.propTypes = {};

export default Landing;
