import React, { Component } from 'react';

import PageHeader from '../pageHeader/PageHeader';

import joshImg from '../../assets/images/josh-gonzalez.png';
import yakiraImg from '../../assets/images/yakira-bristol.png';

import './contributors.scss';

export default class Contributors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyClasses: 'col-lg-10 col-lg-offset-2 col-md-10 col-md-offset-1',
      contributors: [
        {
          img: joshImg,
          name: 'Josh Gonzalez',
          description: 'Nerd by day, superhero by night. I have been working with UI and web applications since 2000, \
            I pretend to know everything; however, I secretly am always searching for the answer. I truly can say: "I.Love.Javascript". \
            Enough Said.',
          twitterLink: 'https://twitter.com/refinedjs',
          igLink: 'https://www.instagram.com/_jtmg_/',
          githubLink: 'https://github.com/refinedjs'
        },
        {
          img: yakiraImg,
          name: 'Yakira Bristol',
          description: 'Creator, builder, innovator and entrepreneur. When I\'m not architecting web and mobile apps to improve personal \
            data accessibility, I\'m searching for the best food and music experiences and dreaming of superheroes and sunsets.',
          twitterLink: 'https://twitter.com/yakiracb',
          igLink: 'https://www.instagram.com/_.shades/',
          githubLink: 'https://github.com/yakirac'
        }
      ]
    };
  }

  render() {
    return (
      <div className='contributors-container'>
        <PageHeader heading='Our Contributors' subHeading='Meet Our Team' />
        <div id='contributors' className='container'>
          <div className='row'>
            {this.state.contributors.map((contributor) => {
              return (
                <div className='contributor col-sm-6 col-md-6'>
                  <div className='thumbnail'>
                    <a name='josh' />
                    <img src={contributor.img} />
                    <div className='caption'>
                      <h3>{contributor.name}</h3>
                      <p className='context'>{contributor.description}</p>
                      <p>
                        <a href={contributor.twitterLink}>
                          <span className='fa-stack fa-lg'>
                            <i className='fa fa-circle fa-stack-2x' />
                            <i className='fa fa-twitter fa-stack-1x fa-inverse' />
                          </span>
                        </a>
                        <a href={contributor.igLink}>
                          <span className='fa-stack fa-lg'>
                            <i className='fa fa-circle fa-stack-2x' />
                            <i className='fa fa-instagram fa-stack-1x fa-inverse' />
                          </span>
                        </a>
                        <a href={contributor.githubLink}>
                          <span className='fa-stack fa-lg'>
                            <i className='fa fa-circle fa-stack-2x' />
                            <i className='fa fa-github fa-stack-1x fa-inverse' />
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

Contributors.propTypes = {
};

Contributors.defaultProps = {
};