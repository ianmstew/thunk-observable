import React, { Component } from 'react';
import Result from '../Result';
import './styles.css';

export default class Results extends Component {
  render() {
    const { results } = this.props;

    return (
      <div className="Results">
        {results.loading.started && 'Loading...'}
        {results.loading.succeeded &&
          results.data.items.map((result) => (
            <Result key={result.id.videoId} result={result} />
          ))}
      </div>
    );
  }
}
