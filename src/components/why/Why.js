import React, { Component } from 'react';

import PageHeader from '../pageHeader/PageHeader';

import './why.scss';

export default class Why extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyClasses: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'
    };
  }

  render() {
    console.log('Why');
    return (
      <div className='why-container'>
        <PageHeader heading='Why???' subHeading='Why Create Refined JS?' />
        <div className='container'>
          <div className='row'>
            <div className={this.state.bodyClasses}>
              <p>
                We realized that there is a lot of information out there. A lot of information. But it&apos;s hidden and it can take days of searching
                to find solutions to a problem. Or an aggregation of data to come up with a solution to a problem.
              </p>
              <p>
                What if we could take the most common problems, along with their solutions and showcase them in one easy to find location?
                What if we could showcase solutions to some problems that may be harder to find because, perhaps only one other person has run into
                it or something similar? What if we could show others how to write clean, quality code in those solutions?
              </p>
              <p>
                That is why we created Refined Js. To present problems, take out all the clutter and noise and give clear,
                tested and quality JavaScript solutions.
              </p>
              <blockquote>
                We are all apprentices in a craft where no one ever becomes a master.
                <br />
                <span> - Ernest Hemmingway</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Why.propTypes = {
};

Why.defaultProps = {
};