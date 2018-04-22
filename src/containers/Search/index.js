import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from 'state/search/actions';
import Render from './Render';

class Layout extends Component {
  render() {
    return <Render {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  ...state.search
});
const mapDispatchToProps = {
  ...searchActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
