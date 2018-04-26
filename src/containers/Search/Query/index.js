import React, { Component } from 'react';
import { VideoDuration } from 'state/search/models';
import './styles.css';

export default class Query extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { query, search } = this.props;
    search(query);
  };

  handleNextClick = () => {
    const { loadPage, results } = this.props;
    loadPage(results.data.nextPageToken);
  };

  handlePreviousClick = () => {
    const { loadPage, results } = this.props;
    loadPage(results.data.prevPageToken);
  };

  handleQueryTermChange = (evt) => {
    const { setQueryTerm } = this.props;
    setQueryTerm(evt.target.value);
  };

  handleVideoDurationChange = (evt) => {
    const { setVideoDuration } = this.props;
    setVideoDuration(evt.target.value);
  };

  render() {
    const { query, results } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="Query">
        <input value={query.queryTerm} onChange={this.handleQueryTermChange} />
        <button disabled={results.loading.started}>Search</button>
        <label className="Query-field">
          Duration:&nbsp;
          <select
            value={query.videoDuration}
            onChange={this.handleVideoDurationChange}
          >
            {Object.values(VideoDuration).map((videoDuration) => (
              <option key={videoDuration} value={videoDuration}>
                {videoDuration}
              </option>
            ))}
          </select>
        </label>
        <span className="Query-field Query-prevNext">
          <button
            type="button"
            onClick={this.handlePreviousClick}
            disabled={!results.data.prevPageToken || results.loading.started}
          >
            Prev
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            disabled={!results.data.nextPageToken || results.loading.started}
          >
            Next
          </button>
        </span>
      </form>
    );
  }
}
