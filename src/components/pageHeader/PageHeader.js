import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './pageheader.scss'; 

export default class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerClasses: 'col-lg-10 col-lg-offset-2 col-md-10 col-md-offset-1'
    };
  }

  render() {
    return (
      <div className='page-header'>
        <header className='intro-header'>
          <div className='container-fluid'>
            <div className='row'>
              <div className={this.state.headerClasses}>
                <div className='site-heading'>
                  <h1>{this.props.heading}</h1>
                  <hr className='small' />
                  <span className='subheading'>{this.props.subHeading}</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

PageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string
};

PageHeader.defaultProps = {
  subHeading: ''
};