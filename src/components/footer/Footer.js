import React, { Component } from 'react';

import './footer.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyClasses: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'
    };
  }

  render() {
    return (
      <div className='footer-container'>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className={this.state.bodyClasses}>
                <ul className='list-inline text-center'>
                  <li>
                    <a href='https://twitter.com/refinedjs'>
                      <span className='fa-stack fa-lg'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-twitter fa-stack-1x fa-inverse' />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/refinedjs/'>
                      <span className='fa-stack fa-lg'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-instagram fa-stack-1x fa-inverse' />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/refinedjs'>
                      <span className='fa-stack fa-lg'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-github fa-stack-1x fa-inverse' />
                      </span>
                    </a>
                  </li>
                </ul>     
                <p className='copyright text-muted'>Refined Js 2018</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {
};

Footer.defaultProps = {
};