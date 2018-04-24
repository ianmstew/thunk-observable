import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p className="Home-intro">
          <Link to="/search">Search</Link>
        </p>
      </div>
    );
  }
}
