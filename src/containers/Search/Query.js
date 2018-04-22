import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Render extends Component {
  render() {
    const { search } = this.props;

    return (
      <div>
        <button onClick={() => search('DSLR video')}>Search</button>
      </div>
    );
  }
}

Render.propTypes = {
  search: PropTypes.func.isRequired
};
