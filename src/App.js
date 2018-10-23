import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './actions';

import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Post from './components/post/Post';

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
        {/*<div className="site-name">{this.state.siteName}</div>*/}
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </Router>
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
