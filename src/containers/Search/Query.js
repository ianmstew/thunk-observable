import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Render extends Component {
  state = {
    query: ''
  };

  handleQueryChange = (evt) => {
    this.setState({
      query: evt.target.value
    });
  };

  render() {
    const { search } = this.props;
    const { query } = this.state;

    return (
      <div>
        <input value={query} onChange={this.handleQueryChange} />
        <button onClick={() => search('DSLR video')}>Search</button>
      </div>
    );
  }
}

Render.propTypes = {
  search: PropTypes.func.isRequired
};
