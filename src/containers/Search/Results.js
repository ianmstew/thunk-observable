import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Render extends Component {
  render() {
    const { results } = this.props;

    return (
      <div>
        {results.loading.started && <pre>Loading...</pre>}
        {results.loading.succeeded && (
          <pre>{JSON.stringify(results.data, null, 2)}</pre>
        )}
      </div>
    );
  }
}

Render.propTypes = {
  results: PropTypes.object.isRequired
};
