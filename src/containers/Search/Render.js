import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Query from './Query';
import Results from './Results';
import './styles.css';

export default class Render extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title="Search" />
        <div className="Search-query">
          <Query {...this.props} />
        </div>
        <Results {...this.props} />
      </Fragment>
    );
  }
}
