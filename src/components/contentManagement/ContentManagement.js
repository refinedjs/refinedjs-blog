import React, { Component } from 'react';

import './contentManagement.scss';

export default class ContentManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyClasses: 'col-lg-10 col-lg-offset-2 col-md-10 col-md-offset-1'
    };
  }

  render() {
    return (
      <div className='content-management-container'>
        You will be able to do post crud
      </div>
    );
  }
}

ContentManagement.propTypes = {
};

ContentManagement.defaultProps = {
};