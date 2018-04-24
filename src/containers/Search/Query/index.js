import React, { Component } from 'react';
import { VideoDuration } from 'state/search/models';
import './styles.css';

export default class Query extends Component {
  handleQueryTermChange = (evt) => {
    const { setQueryTerm } = this.props;
    setQueryTerm(evt.target.value);
  };

  handleVideoDurationChange = (evt) => {
    const { setVideoDuration } = this.props;
    setVideoDuration(evt.target.value);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { query, search } = this.props;
    search(query);
  };

  handlePreviousClick = () => {
    const { loadPage, results } = this.props;
    loadPage(results.data.prevPageToken);
  };

  handleNextClick = () => {
    const { loadPage, results } = this.props;
    loadPage(results.data.nextPageToken);
  };

  render() {
    const { query, results } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="Query">
        <div className="Query-search">
          <input
            value={query.queryTerm}
            onChange={this.handleQueryTermChange}
          />
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
          <button
            className="Query-field"
            type="button"
            onClick={this.handlePreviousClick}
            disabled={!results.data.prevPageToken || results.loading.started}
          >
            Previous
          </button>
          <button
            className="Query-field"
            type="button"
            onClick={this.handleNextClick}
            disabled={!results.data.nextPageToken || results.loading.started}
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}
