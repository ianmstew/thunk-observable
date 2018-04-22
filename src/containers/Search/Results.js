import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Render extends Component {
  render() {
    const { videos } = this.props;

    return (
      <div>
        <pre>
          {JSON.stringify(videos.data, null, 2)}
        </pre>
      </div>
    );
  }
}

Render.propTypes = {
  videos: PropTypes.object.isRequired
};
