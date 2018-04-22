import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p className="Home-intro">
          <Link to="/search">Search YouTube</Link>
        </p>
      </div>
    );
  }
}
