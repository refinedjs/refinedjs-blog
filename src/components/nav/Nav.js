import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import './nav.scss';

import siteLogo from '../../assets/images/main-logo.svg';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClasses: 'navbar navbar-default navbar-custom navbar-fixed-top'
    };
  }

  render() {
    return (
      <div className='nav'>
        <nav className={this.state.navClasses}>
          <div className='container-fluid'>
            <div className='navbar-header page-scroll'>
              {/*<button className='navbar-toggle' type='button' data-target='main-nav' data-toggle='collapse'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>*/}
              <a className='navbar-brand' href='/'>
                <img className='logo' src={siteLogo} alt='RefinedJS' />
              </a>
            </div>
            <div id='main-nav' className='navbar-collapse'>
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <a href='/why'>Why</a>
                </li>
                <li>
                  <a href='/contributors'>Contributors</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
