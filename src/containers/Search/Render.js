import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Query from './Query';
import Results from './Results';

export default class Render extends Component {
  render() {
    return (
      <div>
        <Helmet title="Search" />
        <Query {...this.props} />
        <Results {...this.props} />
      </div>
    );
  }
}
