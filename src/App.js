import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './actions';

import Home from './components/home/Home';

import './assets/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: 'RefinedJS'
    };
  }

  render() {
    return (
      <div>
        <h1 className="site-name">{this.state.siteName}</h1>
        <Home />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
