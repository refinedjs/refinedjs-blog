import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './actions';

import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Post from './components/post/Post';
import Why from './components/why/Why';
import Contributors from './components/contributors/Contributors';
import Footer from './components/footer/Footer';

import ContentManagement from './components/contentManagement/ContentManagement';

import './assets/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={Post} />
            <Route path="/why" component={Why} />
            <Route path="/contributors" component={Contributors} />
            <Route exact path="/admin" component={ContentManagement} />
          </Switch>
        </Router>
        <Footer />
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
