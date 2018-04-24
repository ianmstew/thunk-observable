import React, { Component } from 'react';
import './styles.css';

export default class Result extends Component {
  render() {
    const { result } = this.props;

    return (
      <div key={result.id.videoId} className="Result">
        <div className="Result-thumbnailContainer">
          <a
            href={`https://www.youtube.com/watch?v=${result.id.videoId}`}
            target="_blank"
          >
            <img
              className="Result-thumbnail"
              src={result.snippet.thumbnails.high.url}
              alt="thumbnail"
            />
          </a>
        </div>
        <div className="Result-title">
          <a
            href={`https://www.youtube.com/watch?v=${result.id.videoId}`}
            target="_blank"
          >
            {result.snippet.title}
          </a>
        </div>
      </div>
    );
  }
}
